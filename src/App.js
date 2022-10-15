import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar"
import ExcercisesList from "./components/ExcercisesList";
import EditExcercise from "./components/EditExcercise";
import CreateExcercise from "./components/CreateExcercise";
import CreateUser from "./components/CreateUser";


function App() {
  const URL = "https://morning-castle-01481.herokuapp.com/"
  const [allExcercises, setAllExercises] = useState(null)
  const [allUsers, setAllUsers] = useState(null)

  const getExcercises = async () => {
    const response = await fetch(URL + "excercises/")
    const data = await response.json()
    setAllExercises(data)
  }

  useEffect(() => {
    getExcercises();
  }, []);

  const getUsers = async () => {
    const response = await fetch(URL + "users/")
    const data = await response.json()
    setAllUsers(data)
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <Routes>
          <Route exact path="/" element={<ExcercisesList allExcercises={allExcercises}/>} />
          <Route path="/edit/:id" element={<EditExcercise allUsers={allUsers}/>} />
          <Route path="/create" element={<CreateExcercise allUsers={allUsers}/>} />
          <Route path="/user" element={<CreateUser/>} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
