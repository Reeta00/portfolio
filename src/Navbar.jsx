import './css/navbar.css'
import About from './components/About';

function Navbar() {
    return (
        <nav className="nav">
            <a href="/">Home</a>
            <ul>
                <li><a href='/about'>About</a></li>
                <li><a href='/'>Projects</a></li>
                <li><a href='/'>Contact me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;