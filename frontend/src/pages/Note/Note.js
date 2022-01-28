import { useLocation } from 'react-router-dom'
import SecondaryNavbar from '../../components/SecondaryNavbar'
import { Notes, Folders } from '../../data'
import { IoAddSharp } from "react-icons/io5";
import './note.css'

const Note = ({ noteType }) => {

    const location = useLocation()
    const path = location.pathname.split('/')
    const noteId = (noteType === 'fromCollections') ? path[4] : path[2]
    const collectionId = path[2]
    const note = Notes.find(n => n.id.toString() === noteId)
    console.log(note)

    const noteCategory = Folders.find(n => n.id.toString() === collectionId)

    console.log( 'Note Category on Note Page:', noteCategory)

    return (
        <div className='note'>
            <div className='inWrapper'>
                <SecondaryNavbar/>
                <main className='noteMainWrapper'>
                    <div className='noteTopSectionWrapper'>
                        <h1 className='noteTitle'>{note.title}</h1>
                        <div className='noteTopSectionItem'>
                            <div className='itemTitleWrapper'>
                                <p className='itemTitle'>Created by</p>
                            </div>
                            <div className='itemDetails'>
                                <img className='userProfileImage' src={process.env.PUBLIC_URL + '/assets/default-image.png'} alt='profile img'/>
                                <p className='userProfileName'>{note.author}</p>
                            </div>
                        </div>
                        <div className='noteTopSectionItem'>
                            <div className='itemTitleWrapper'>
                                <p className='itemTitle'>Last Modified</p>
                            </div>
                            <div className='itemDetails'>
                                <p className='lastModifiedValue'>19 April 2021, 20:39 PM</p>
                            </div>
                        </div>
                        <div className='noteTopSectionItem'>
                            <div className='itemTitleWrapper'>
                                <p className='itemTitle'>Tags</p>
                                <IoAddSharp className='addNewTagIcon'/>
                            </div>
                            <div className='itemDetails'>
                                {
                                    note.tags.map((tag, index)=> {
                                        return <p className='tags' key={index}>{tag}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='noteMainSectionWrapper'>
                        {
                            (note.subtitle) 
                            ? 
                            <h2 className='noteBodyTitleText'>{note.subtitle}</h2>
                            :
                            '' 
                        }
                        <p className='noteBodyText'>{note.body}</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Note
