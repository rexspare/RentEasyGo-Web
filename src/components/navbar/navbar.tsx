import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo-transparent.png';
import './navbar.css';

const Navbar = () => {
    const [sticky, setsticky] = useState(false)

    useEffect(() => {
        const subscribe = window.addEventListener("scroll", () => {
            setsticky(window.scrollY > 700)
        })

        return subscribe
    }, [])



    return (
        <nav className={`container-index ${sticky && "dark-nav"}`}>

            <Link to="Hero-ID" smooth={true} offset={0} duration={1000}>
                <img src={logo} alt='' className='logo' />
            </Link>
            <ul >
                <li>
                    <a
                        href="https://calendly.com/renteasygo/new-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={"btn navbar-btn"}
                    >
                        Are you an Invester?
                    </a>
                </li>
            </ul>


        </nav>
    )
}

export default Navbar