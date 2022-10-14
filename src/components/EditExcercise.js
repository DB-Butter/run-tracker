import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

function CreateExcercise(props) {
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

    function deleteSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:4000/excercises/${id}`, {method: 'DELETE', mode: "cors"});
        navigate('/')
        window.location.reload()
    }

    function onSubmit(e) {
        e.preventDefault();
        const form = {
            username: username,
            description: description,
            duration: duration,
        }
        fetch(`http://localhost:4000/excercises/update/${id}`, {method: 'PUT', mode: "cors", body: JSON.stringify(form), headers: {"Content-Type": "application/json"}});
        navigate('/')
        window.location.reload()
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
            <form onSubmit={onSubmit}>
                <label htmlFor="username">
                    Username:
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
                <input type="text" name="description" value={description} onChange={onChangeDescription}/>
                </label>
                <label htmlFor="duration">
                    Duration (in minutes):
                <input type="number" name="duration" value={duration} onChange={onChangeDuration}/>
                </label>
                <input type="submit" value="Edit Log" className="submit"/>
            </form>
            <form onSubmit={deleteSubmit}>
                <input type="submit" value="Delete This Log" className="submit"/>
            </form>
        </div>
    )
}

export default CreateExcercise;