import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import './secondaryNavbar.css'

const SecondaryNavbar = ({ view, onCollectionViewChange, onNoteViewChange, collectionTitle }) => {
    const location = useLocation()
    const path = location.pathname.toString()


    const DashboardSecondaryNavbar = () => {
        return (
            <div className='topbar'>
                <ul className='topbarNavList'>
                    <li id='notesViewButton' className={`topbarNavItems ${view === 'notes' ? 'active' : ''}`} onClick={onNoteViewChange}>All Notes</li>
                    <li id='collectionsViewButton' className={`topbarNavItems ${view === 'collections' ? 'active' : ''}`} onClick={onCollectionViewChange}>Collections</li>
                </ul>
            </div>
        )
    }

    const NoteAndCollectionSecondaryNavbar = () => {

        const title = collectionTitle

        console.log('Collection Name:', title )

        return (
            <div className='secondaryNavbar'>
            {/* <Link to={`/`} style={{textDecoration: 'none', color: '#000'}}> */}
                <div className='secondaryNavbarItem'>
                    <IoIosArrowBack className='secondaryNavbarIcon' onClick={() => window.history.back()}/>
                    <p className='secondaryNavbarText'>{(path.includes('notes') && (path.includes('collections'))) ? '' : (path.includes('notes') ? '' : `${title}`) }</p>
                </div>
            {/* </Link> */}
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
