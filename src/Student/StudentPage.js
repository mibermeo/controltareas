import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getListStudent } from "../Service/StudentService";
import Student from "./Student";
import StudentList from "./StudentList";





function StudentPage() {  
    const [student, setStudent] = useState([]);
    

    
  
    useEffect(() => {    
      getListStudent().then(data => {
        setStudent(data);
      }
      );
  
    }, []);
  
    return (
      <div>
        <h2>Lista de Estudiantes </h2>
        <Link to = '/createstudent'> Crear </Link>
        <StudentList>
          
          {
            student.map(student =>
              <Student key ={student.idstudent} idstudent={student.idstudent} cedula={student.cedula} nombre={student.nombre} apellido={student.apellido} correo={student.correo} telefono={student.telefono} />)
            
          }
        </StudentList>
      </div>
    );
  }

  export default StudentPage ;