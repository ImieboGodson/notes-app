import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import Search from '../search/Search'

const Header = () => {

    const location = useLocation()

    const path = location.pathname.split("/")[1]

    const LoginPageHeader = () => {
        return(
            <div className='loginHeader'>
                <p className='logo'>.N</p>
            </div>
        )
    }

    const InAppHeader = () => {

        const [dropdown, setDropdown] = useState(false)

        const dropdownFunc = () => {
            dropdown 
            ? 
            setDropdown(false)
            :
            setDropdown(true)
        }
        
        return (
            <div className='inAppHeader'>
                <Link to={'/'} style={{textDecoration: 'none', color: '#000'}}>
                    <p className='logo'>.N</p>
                </Link>
                
                <Search />
                <ul className='navbarList' onClick={dropdownFunc}>
                    <li className='navbarItem'><img className='navProfileImage' src={process.env.PUBLIC_URL + '/assets/images/default-image.png'} alt='profile img'/></li>
                    <li className='navbarItem profileName'>Profile Name</li>
                    <div id='userDetailsDropdown' className={`userDetailsDropdown ${(dropdown ? 'display' : '')}`}>
                        {/* <div className='userDetailsItem'>
                            <p>Signed in as <span>James Blunt</span></p>
                        </div> */}
                        <div className='userDetailsItem'>
                            <p>Account Settings</p>
                        </div>
                        <div className='userDetailsItem'>
                            <p><span>Sign out</span></p>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }

    return (
        <div className='headerWrapper'>
            {
                (path === 'login' || path === 'signup')
                ?
                <LoginPageHeader />
                :
                <InAppHeader />
            }
        </div>
    )
}

export default Header
