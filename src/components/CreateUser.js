import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser(props) {
    let navigate = useNavigate();

    const initState = "";
    const [username, setUsername] = useState(initState)

    function onChangeUsername(e) {
        setUsername(e.target.value)
    }

    function reload() {
        window.location.reload()
    }
    const [finished, setFinished] = useState(false)
    function checkFinished() {
        if(finished === false) {
            setFinished(true)
            window.setTimeout(checkFinished, 100)
        } else {
            navigate('/')
            reload()
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        const form = {
            username: username,
        }
        fetch('https://morning-castle-01481.herokuapp.com/users/add', {method: 'POST', mode: "cors", body: JSON.stringify(form), headers: {"Content-Type": "application/json"}});
        checkFinished()
    }

    return(
        <div className="form-page">
            <h2>Create New User</h2>
            <form onSubmit={onSubmit} className="container">
                <label htmlFor="username">
                    Username:
                <input type="text" name="username" value={username} onChange={onChangeUsername}/>
                </label>
                <input type="submit" value="Create User" className="submit"/>
            </form>
        </div>
    )
}

export default CreateUser;