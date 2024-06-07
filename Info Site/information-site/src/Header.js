
import logo from "./logo512.png"

function Header() {
    return (
        <header>
            <nav className='nav'>
                <div className="name">
                    <img src={logo} className='img' />
                    <h1>ReactFacts</h1>
                </div>
                
                <h3 className="nav-items"> React Course - Project 1 </h3>
            </nav>
        </header>
    )
}

export default Header;