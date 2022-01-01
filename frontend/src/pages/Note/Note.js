import { useLocation } from 'react-router-dom'
import SecondaryNavbar from '../../components/SecondaryNavbar'
import { Notes } from '../../data'
import './note.css'

const Note = () => {

    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const note = Notes.find(n => n.id.toString() === path)
    console.log(location)

    return (
        <div className='note'>
            <div className='inWrapper'>
                <SecondaryNavbar />
                Note go here
            </div>
        </div>
    )
}

export default Note
