import React, { useState } from "react";
import { createStudent } from '../Service/StudentService'

function StudentCreate() {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      cedula:cedula,
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      
    }
    createStudent(objeto)

  }

  const onChange = (event) =>{
    if(event.target.name==='cedula')
    setCedula(event.target.value)
    if(event.target.name==='nombre')
    {
    setNombre(event.target.value)
    }
    if(event.target.name==='apellido')
    setApellido(event.target.value)

    if(event.target.name==='correo')
    setCorreo(event.target.value)

    if(event.target.name==='telefono')
    setTelefono(event.target.value)
  }

  return (
    <div>
      <h2>Crear Estudiantes</h2>
      <form onSubmit={onSubmit}>
      <label>
          Cedula
          <input 
            name="cedula"
            value={cedula}
            onChange={onChange}
          />
        </label>
        <label>
          Nombre
          <input 
            name="nombre"
            value={nombre}
            onChange={onChange}
          />
        </label>
        <label>
          Apellido
          <input 
            name="apellido"
            value={apellido}
            onChange={onChange}
          />
        </label>
        <label>
          Correo
          <input 
            name="correo"
            value={correo}
            onChange={onChange}
          />
        </label>
        <label>
          Telefono
          <input 
            name="telefono"
            value={telefono}
            onChange={onChange}
          />
        </label>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default StudentCreate;