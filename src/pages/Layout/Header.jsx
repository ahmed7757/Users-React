import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header>
                <NavLink href="#" className="logo">Ahmed</NavLink>
                <nav>
                    <ul className="links">
                        <NavLink to={"/"} className="link" >Home</NavLink>
                        <NavLink to={"/UsersPage1"} className="link" >Users</NavLink>
                        <NavLink to={"/contact"} className="link" >Contact</NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;