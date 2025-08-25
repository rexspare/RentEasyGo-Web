import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo-transparent.png';
import './navbar.css';

const Navbar = () => {
    const [sticky, setsticky] = useState(false)
    const [mobileMenu, setmobileMenu] = useState(false)

    useEffect(() => {
        const subscribe = window.addEventListener("scroll", () => {
            setsticky(window.scrollY > 700)
        })

        return subscribe
    }, [])

    const toggleMenu = () => {
        setmobileMenu((prev) => !prev)
    }


    return (
        <nav className={`container-index ${sticky && "dark-nav"}`}>

            <Link to="Hero-ID" smooth={true} offset={0} duration={1000}>
                <img src={logo} alt='' className='logo' />
            </Link>
            <ul >
                {/* <li><Link to="About-ID" smooth={true} offset={-200} duration={1000}>About</Link></li>
                <li><Link to="Services-ID" smooth={true} offset={-200} duration={1000}>Services</Link></li>
                <li><Link to="Projects-ID" smooth={true} offset={-200} duration={1000}>Projects</Link></li>
                <li><Link to="Team-ID" smooth={true} offset={-200} duration={1000}>Team</Link></li>
                <li><Link to="Testimonials-ID" smooth={true} offset={-200} duration={1000}>Testimonials</Link></li> */}
                {/* <li ><Link to="Contact-ID" smooth={true} offset={-200} duration={1000}  className='btn navbar-btn'>Are you an Invester?</Link></li> */}


                <li>
                    <a
                        href="https://calendly.com/renteasygo/new-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={mobileMenu ? "btn navbar-btn" : "btn navbar-btn"}
                    >
                        Are you an Invester?
                    </a>
                </li>

            </ul>

            <MenuIcon color='white' className='menu-icon' onClick={toggleMenu} />

        </nav>
    )
}

export default Navbar