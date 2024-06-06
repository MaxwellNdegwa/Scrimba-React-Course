
import logo from "./logo512.png"

function Header() {
    return (
        <header>
            <nav className='nav'>
                <img src={logo} className='img' />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;