
import logo from "../assets/airbnb-logo.png"

export default function Navbar() {

    return (
        <nav className="nav-bar">
            <div className="logo-div">
            <img src={logo} alt="logo" className="nav-logo" />
            </div>
        </nav>
        


    )
}