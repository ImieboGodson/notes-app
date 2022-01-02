import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import './secondaryNavbar.css'

const SecondaryNavbar = ({ view, onCollectionsViewChange, onNotesViewChange }) => {
    const location = useLocation()
    const path = location.pathname.toString()

    if(path.includes('notes')) {
        console.log('this path includes notes')
    }
    console.log(location.pathname)

    const DashboardSecondaryNavbar = () => {
        return (
            <div className='topbar'>
                <ul className='topbarNavList'>
                    <li id='notesViewButton' className={`topbarNavItems ${view === 'notes' ? 'active' : ''}`} onClick={onNotesViewChange}>All Notes</li>
                    <li id='collectionsViewButton' className='topbarNavItems' onClick={onCollectionsViewChange}>Collections</li>
                </ul>
            </div>
        )
    }

    const NoteAndCollectionSecondaryNavbar = () => {
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

    return (
        <>
            {
                (path.includes('notes') || path.includes('collections')) 
                ?
                <NoteAndCollectionSecondaryNavbar />
                :
                <DashboardSecondaryNavbar />
            }
        </>
    )
}

export default SecondaryNavbar
