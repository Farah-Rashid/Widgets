import { NavLink } from "react-router-dom";

function Navbar(){
    return( 
    <nav className ="primary">
        <NavLink to= '/'>Accordion</NavLink>
        <NavLink to= '/dropdown'>Dropdown</NavLink>
        <NavLink to= '/translate'>Translate</NavLink>
        <NavLink to= '/search'>Search</NavLink>
    </nav>
    )
}
export default Navbar;