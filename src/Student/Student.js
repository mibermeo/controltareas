import "./Student.css";

function Student (props){
    return(
        <div className="caja">
           
            <h3 className="cajaColor1"> {props.idstudent} </h3>
            <p className="cajaColor2">{props.cedula}</p>
            <p className="cajaColor2">{props.nombre}</p>
            <p className="cajaColor2">{props.apellido}</p>
            <p className="cajaColor2">{props.correo}</p>
            <p className="cajaColor2">{props.telefono}</p>
            
           
        </div>
    )
}
export default Student;