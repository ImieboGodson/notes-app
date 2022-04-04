import { useState } from 'react'
// import { Link } from 'react-router-dom'
import { IoAddSharp } from "react-icons/io5"
import './noteCard.css'

const NoteCard = ({ note }) => {

    const [clicked, setClicked] = useState(false)

    // const onNoteClicked = () => {
    //         (clicked) 
    //         ? 
    //         setClicked(true)
    //         :
    //         setClicked(false)

    //         console.log('Note Clicked?', clicked)
    // }


    const NoteCardSmall = () => {
        return (
        // <Link to={`./notes/${note.id}`} style={{textDecoration: 'none', color: '#000'}}>
            <div className='noteCard'>
                <p className='date'>{note.date}</p>
                <p className='title'>{note.title}</p>
                <div className='tagsContainer'>
                    { note.tags.map((t, i) => {
                        return <p className='tags' key={i}>{t}</p>
                    })}
                </div>
                <div className='body'>
                    <p className='bodyText'>{note.body}</p>
                </div>
            </div>
        // </Link>
        )
    }

    const NoteCardOnClick = () => {
        return (
            <div className='overlayBackground'>
                <div className='noteWrapper'>
                <main className='noteMainWrapper'>
                    <div className='noteTopSectionWrapper'>
                        <h1 className='noteTitle'>{note.title}</h1>
                        <div className='noteTopSectionItem'>
                            <div className='itemTitleWrapper'>
                                <p className='itemTitle'>Created by</p>
                            </div>
                            <div className='itemDetails'>
                                <img className='userProfileImage' src={process.env.PUBLIC_URL + '/assets/images/default-image.png'} alt='profile img'/>
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

    return (
        <div className='mainNoteCardContainer' onClick={ () => setClicked(!clicked)}>
            {
                (clicked)
                ?
                <NoteCardOnClick />
                :
                <NoteCardSmall />
            }  
        </div>
        
    )
}

export default NoteCard
