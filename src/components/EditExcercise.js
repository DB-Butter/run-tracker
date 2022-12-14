import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

function EditExcercise(props) {
    let initForm = {
        username: "",
        description: "",
        duration: 0,
    }
    
    const initState = "";
    const [username, setUsername] = useState("")
    const [description, setDescription] = useState(initState)
    const [duration, setDuration] = useState(0)

    function onChangeUsername(e) {
        setUsername(e.target.value)
    }
    function onChangeDescription(e) {
        setDescription(e.target.value)
    }
    function onChangeDuration(e) {
        setDuration(e.target.value)
    }

    function reload() {
        window.location.reload()
    }
    const [finished, setFinished] = useState(false)
    function checkFinished() {
        if(finished === false) {
            setFinished(true)
            window.setTimeout(checkFinished, 150)
        } else {
            navigate('/')
            reload()
        }
    }
    function onSubmit(e) {
        e.preventDefault();
        const form = {
            username: username,
            description: description,
            duration: duration,
        }
        fetch(`https://morning-castle-01481.herokuapp.com/excercises/update/${id}`, {method: 'PUT', mode: "cors", body: JSON.stringify(form), headers: {"Content-Type": "application/json"}});
        console.log(`${id}`)
        console.log(JSON.stringify(form))
        checkFinished()
    }

    function deleteSubmit(e) {
        e.preventDefault();
        fetch(`https://morning-castle-01481.herokuapp.com/excercises/${id}`, {method: 'DELETE', mode: "cors"});
        checkFinished()
    }

    const navigate = useNavigate();
    const {id} = useParams();

    const users = []
    const populate = () => {
        for(let i=0;i<props.allUsers.length;i++){
            users.push(props.allUsers[i].username)
        }
    }
    {props.allUsers ? populate() : console.log('Loading...')}

    return(
        <div className="form-page">
            <h2>Edit Log</h2>
            <form onSubmit={onSubmit} className="container">
                <label htmlFor="username">
                    Username:{" "}
                <select required value={username} onChange={onChangeUsername}>
                    {
                        users.map(function(user) {
                            return <option key={user} value={user}> {user} </option>
                        })
                    }
                </select>
                </label>
                <label htmlFor="description">
                    Description:
                <input placeholder="Enter your new description" className="description-input" type="text" name="description" value={description} onChange={onChangeDescription}/>
                </label>
                <label htmlFor="duration">
                    Duration (in minutes):
                <input type="number" name="duration" value={duration} onChange={onChangeDuration}/>
                </label>
                <input type="submit" value="Edit Log" className="submit"/>
            </form>
            <form onSubmit={deleteSubmit} className="container">
                <input type="submit" value="Delete This Log" className="submit"/>
            </form>
        </div>
    )
}

export default EditExcercise;