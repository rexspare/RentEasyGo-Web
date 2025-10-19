import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo-transparent.png';
import './navbar.css';

const Navbar = () => {
    const [sticky, setsticky] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const subscribe = window.addEventListener("scroll", () => {
            setsticky(window.scrollY > 700)
        })

        return subscribe
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }



    return (
        <>
            <nav className={`container-index ${sticky && "dark-nav"}`}>
                <Link to="Hero-ID" smooth={true} offset={0} duration={1000}>
                    <img src={logo} alt='' className='logo' />
                </Link>
                
                {/* Desktop Menu */}
                <ul className="nav-menu">
                    <li>
                        <Link to="Hero-ID" smooth={true} offset={-100} duration={1000} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="overview" smooth={true} offset={-100} duration={1000} className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="features" smooth={true} offset={-100} duration={1000} className="nav-link">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link to="mockups" smooth={true} offset={-100} duration={1000} className="nav-link">
                            Preview
                        </Link>
                    </li>
                    <li>
                        <Link to="mission" smooth={true} offset={-100} duration={1000} className="nav-link">
                            Mission
                        </Link>
                    </li>
                    <li>
                        <Link to="waiting-list" smooth={true} offset={-100} duration={1000} className="nav-link">
                            Join Waitlist
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://calendly.com/renteasygo/new-meeting"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn navbar-btn no-hover"
                        >
                            Are you an Investor?
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger Menu */}
                <button 
                    className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-drawer-content">
                    <div className="mobile-drawer-header">
                        <img src={logo} alt='RentEasyGo' className='mobile-logo' />
                        <button 
                            className="close-mobile-menu"
                            onClick={closeMobileMenu}
                            aria-label="Close mobile menu"
                        >
                            ×
                        </button>
                    </div>
                    
                    <ul className="mobile-nav-menu">
                        <li>
                            <Link 
                                to="Hero-ID" 
                                smooth={true} 
                                offset={-100} 
                                duration={1000} 
                                className="mobile-nav-link"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="overview" 
                                smooth={true} 
                                offset={-100} 
                                duration={1000} 
                                className="mobile-nav-link"
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="features" 
                                smooth={true} 
                                offset={-100} 
                                duration={1000} 
                                className="mobile-nav-link"
                                onClick={closeMobileMenu}
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="mockups" 
                                smooth={true} 
                                offset={-100} 
                                duration={1000} 
                                className="mobile-nav-link"
                                onClick={closeMobileMenu}
                            >
                                Preview
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="mission" 
                                smooth={true} 
                                offset={-100} 
                                duration={1000} 
                                className="mobile-nav-link"
                                onClick={closeMobileMenu}
                            >
                                Mission
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="waiting-list" 
                                smooth={true} 
                                offset={-100} 
                                duration={1000} 
                                className="mobile-nav-link"
                                onClick={closeMobileMenu}
                            >
                                Join Waitlist
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://calendly.com/renteasygo/new-meeting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mobile-nav-btn"
                                onClick={closeMobileMenu}
                            >
                                Are you an Investor?
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Drawer Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="mobile-drawer-overlay"
                    onClick={closeMobileMenu}
                ></div>
            )}
        </>
    )
}

export default Navbar