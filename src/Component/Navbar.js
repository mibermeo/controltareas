
import { NavLink } from "react-router-dom";
export default function Navbar (){

return (
    <ul>
        <li>
            <NavLink to="/student">
                Estudiantes
            </NavLink>
        </li>
        <NavLink to="/user">
                Nuevos Usuarios
            </NavLink>
    </ul>
);

}