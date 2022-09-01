import { NavLink } from "react-router-dom"
import s from "./Navigator.module.scss"

const Navigator = () => {
  return (
    <nav>
      <NavLink to="/home" className={ ({ isActive }) => isActive ? s.active : s.link }>Home</NavLink >
      <NavLink to="/auth" className={ ({ isActive }) => isActive ? s.active : s.link }>Auth</NavLink >
    </nav >
  );
}

export default Navigator;
