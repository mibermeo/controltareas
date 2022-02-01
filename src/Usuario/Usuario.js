import "./Student.css";

function User (props){
    return(
        <div className="caja">
           
            <h3 className="cajaColor1"> {props.id} </h3>
            <p className="cajaColor2">{props.username}</p>
            <p className="cajaColor2">{props.password}</p>
            <p className="cajaColor2">{props.status}</p>
            
            
           
        </div>
    )
}
export default User;