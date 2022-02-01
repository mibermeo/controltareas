import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdStudent,updateStudent } from '../Service/StudentService'
import './Student.css'

function StudentPage() {

  const { studentId } = useParams();
  const [student, setStudent] = useState({cedula:'', nombre:'',apellido:'',correo:'', telefono:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateStudent(student);
  }
  const onChange = (event) =>{
    if(event.target.name==='cedula')
      setStudent({...student,cedula:event.target.value})
    if(event.target.name==='nombre')
      setStudent({...student,nombre:event.target.value})    
    if(event.target.name==='apellido')    
      setStudent({...student,apellido:event.target.value})
    if(event.target.name==='correo')
      setStudent({...student,correo:event.target.value})
      if(event.target.name==='telefono')
      setStudent({...student,telefono:event.target.value})
  }

  useEffect(() => {    
    findByIdStudent(studentId).then(data => {
      setStudent(data);  
    }
    );
  }, [studentId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actulizacion de los Registros del Estudiante</h2>

      <input 
          className="formUpdateInput"
            name="cedula"
            placeholder="Cedula" 
            value={student.cedula}
            onChange={onChange}

          />
          <input 
          className="formUpdateInput"
            name="nombre"
            placeholder="Nombre" 
            value={student.nombre}
            onChange={onChange}

          />

          <input 
           className="formUpdateInput"
           placeholder="Apellido" 
            name="apellido"
            value={student.apellido}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Correo"
            name="correo"
            value={student.correo}
            onChange={onChange}
          />

        <input 
          className="formUpdateInput"
            name="telefono"
            placeholder="Telefono" 
            value={student.telefono}
            onChange={onChange}

          />


        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>

    </div>
  );
}

export default StudentPage;