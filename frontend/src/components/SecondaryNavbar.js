import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import './secondaryNavbar.css'

const SecondaryNavbar = () => {
    const location = useLocation()
    const path = location.pathname.toString()

    if(path.includes('notes')) {
        console.log('this path includes notes')
    }
    console.log(location.pathname)

    return (
        <div className='secondaryNavbar'>
        <Link to={`/`} style={{textDecoration: 'none', color: '#000'}}>
            <div className='secondaryNavbarItem'>
                <IoIosArrowBack className='secondaryNavbarIcon'/>
                <p className='secondaryNavbarText'>{path.includes('notes') ? 'All Notes' : 'Collections' }</p>
            </div>
        </Link>
        </div>
    )
}

export default SecondaryNavbar
