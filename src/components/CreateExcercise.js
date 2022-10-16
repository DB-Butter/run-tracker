import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateExcercise(props) {
    const initState = "";
    const [username, setUsername] = useState("")
    const [description, setDescription] = useState(initState)
    const [duration, setDuration] = useState(0)
    const navigate = useNavigate();

    function onChangeUsername(e) {
        setUsername(e.target.value)
    }
    function onChangeDescription(e) {
        setDescription(e.target.value)
    }
    function onChangeDuration(e) {
        setDuration(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const form = {
            username: username,
            description: description,
            duration: duration,
        }
        fetch('https://morning-castle-01481.herokuapp.com/excercises/add', {method: 'POST', mode: "cors", body: JSON.stringify(form), headers: {"Content-Type": "application/json"}});
        navigate("/")
        window.location.reload()
    }
    const users = []
    const populate = () => {
        for(let i=0;i<props.allUsers.length;i++){
            users.push(props.allUsers[i].username)
        }
    }
    {props.allUsers ? populate() : console.log('Loading...')}
    return(
        <div className="form-page">
            <h2>Create New Log</h2>
            <form onSubmit={(e) => onSubmit(e)} className="container">
                <select required value={username} onChange={onChangeUsername}>
                    {
                        users.map(function(user) {
                            return <option key={user} value={user}> {user} </option>
                        })
                    }
                </select>
                <label htmlFor="description">
                    Description:
                <input type="text" name="description" value={description} onChange={onChangeDescription}/>
                </label>
                <label htmlFor="duration">
                    Duration (in minutes):
                <input type="number" name="duration" value={duration} onChange={onChangeDuration}/>
                </label>
                <input type="submit" value="Create Log" className="submit"/>
            </form>
        </div>
    )
}

export default CreateExcercise;