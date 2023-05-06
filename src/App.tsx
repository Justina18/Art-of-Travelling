import React from "react";
import "./App.css";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import Header from "./Components/Header";
import Land from "./Components/Land";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import SignUp from "./Components/Forms/SignUp";

function App() {
  const NameofPerson = {
    first: "Nina",
    last: "Igbani",
  };

  const List = [
    {
      firstName: "Nina",
      lastName: "Igbani",
    },
    {
      firstName: "Fatima",
      lastName: "Nkuve",
    },
    {
      firstName: "Awayi",
      lastName: "Nwakao",
    },
  ];

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path="/Signup" element={<SignUp/> } />
        </Routes>
      </Router>

     
      <Greet greeting="Good Morning" unread={23} isLoggedIn={false} />
      <Person name={NameofPerson} list={List} />
    </div>
  );
}

export default App;
