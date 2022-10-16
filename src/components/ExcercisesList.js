import { useEffect } from "react";

function ExcercisesList(props) {
    window.onload = function () {window.location.reload()}
    let allExcercises = props.allExcercises
    let excercises = []
    const populate = () => {
        for(let i=0;i<allExcercises.length;i++){
            let editUrl=`https://run-tracker-is.online/edit/${allExcercises[i]._id}`
            excercises.push(<div key={i} className="container">
                <h3>Excercise: {allExcercises[i].description}</h3>
                <p>For: {allExcercises[i].duration} minutes</p>
                <p>By: {allExcercises[i].username}</p>
                <a href={editUrl} className="nav-link">Edit</a>
                <br />
            </div>)
        }
    }
    {allExcercises ? populate() : console.log('Loading...')}
    return(
        <div className="excercise-container">
            {excercises}
        </div>
    )
}
export default ExcercisesList;