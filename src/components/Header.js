import './header.css'

const Header = () => {
    return (
        <div className='headerComponent'>
            <p className='logo'>.N</p>
            <ul className='navbarList'>
                <li className='navbarItem'><img className='navProfileImage' src={process.env.PUBLIC_URL + '/assets/default-image.png'} alt='profile img'/></li>
                <li className='navbarItem profileName'>Profile Name</li>
            </ul>
        </div>
    )
}

export default Header
