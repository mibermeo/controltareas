import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import StudentPage from './Student/StudentPage';
import StudentCreate from './Student/StudentCreate';
import StudentUpdate from './Student/StudentUpdate';
import Navbar from "./Component/Navbar";
import UsuarioPage from './User/UsuarioPage';
function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/student" element={<StudentPage />} />                 
        <Route path="/createstudent" element={ <StudentCreate />   }/>   
        <Route path="/updatestudent/:studentId" element={ <StudentUpdate />   }/>   
        <Route path="/user" element={<UsuarioPage />} />
      </Routes>

    </BrowserRouter>   
  );
}

export default App;
