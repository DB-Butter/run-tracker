import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser(props) {
    let navigate = useNavigate();

    const initState = "";
    const [username, setUsername] = useState(initState)

    function onChangeUsername(e) {
        setUsername(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        const form = {
            username: username,
        }
        fetch('http://localhost:4000/users/add', {method: 'POST', mode: "cors", body: JSON.stringify(form), headers: {"Content-Type": "application/json"}});
        navigate("/")
        window.location.reload()
    }

    return(
        <div className="form-page">
            <h2>Create New User</h2>
            <form onSubmit={onSubmit}>
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