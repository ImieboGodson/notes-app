import { Link, useLocation } from 'react-router-dom'
import './header.css'
import Search from './Search'

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
        return (
            <div className='inAppHeader'>
                <Link to={'/'} style={{textDecoration: 'none', color: '#000'}}>
                    <p className='logo'>.N</p>
                </Link>
                
                <Search />
                <ul className='navbarList'>
                    <li className='navbarItem'><img className='navProfileImage' src={process.env.PUBLIC_URL + '/assets/default-image.png'} alt='profile img'/></li>
                    <li className='navbarItem profileName'>Profile Name</li>
                </ul>
            </div>
        )
    }

    return (
        <>
            {
                (path === 'login' || path === 'signup')
                ?
                <LoginPageHeader />
                :
                <InAppHeader />
            }
        </>
    )
}

export default Header
