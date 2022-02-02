import { useLocation } from 'react-router-dom';
import { IoAddSharp } from "react-icons/io5";
import { Notes, Folders } from '../../data'
import './note.css';

const Note = ({ noteType }) => {

  // const location = useLocation()
  //   const path = location.pathname.split('/')
  //   const noteId = (noteType === 'fromCollections') ? path[4] : path[2]
  //   const collectionId = path[2]
  //   const note = Notes.find(n => n.id.toString() === noteId)
  //   console.log(note)

  //   const noteCategory = Folders.find(n => n.id.toString() === collectionId)

  //   console.log( 'Note Category on Note Page:', noteCategory)

  return (
    <div className='overlayBackground'>
        <div className='noteWrapper'>
          <main className='noteMainWrapper'>
              <div className='noteTopSectionWrapper'>
                  {/* <h1 className='noteTitle'>{note.title}</h1> */}
                  <h1 className='noteTitle'>Title Is Void</h1>
                  <div className='noteTopSectionItem'>
                      <div className='itemTitleWrapper'>
                          <p className='itemTitle'>Created by</p>
                      </div>
                      <div className='itemDetails'>
                          <img className='userProfileImage' src={process.env.PUBLIC_URL + '/assets/images/default-image.png'} alt='profile img'/>
                          {/* <p className='userProfileName'>{note.author}</p> */}
                          <p className='userProfileName'>Author</p>
                          <p className='userProfileName'>Surname</p>
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
                          {/* {
                              note.tags.map((tag, index)=> {
                                  return <p className='tags' key={index}>{tag}</p>
                              })
                          } */}
                      </div>
                  </div>
              </div>
              <div className='noteMainSectionWrapper'>
                  {/* {
                      (note.subtitle) 
                      ? 
                      <h2 className='noteBodyTitleText'>{note.subtitle}</h2>
                      :
                      '' 
                  } */}
                  {/* <p className='noteBodyText'>{note.body}</p> */}
                  <p className='noteBodyText'>I will seek his own, but another time, or he shuns it is so, but we reject the pleasure of all is what man is there it is either held in the pleasures of the pain that we can become neither" a I will seek his own, but another time, or he shuns it is so, but we reject the pleasure of all is what man is there it is either held in the pleasures of the pain that we can become neither" a I will seek his own, but another time, or he shuns it is so, but we reject the pleasure of all is what man is there it is either held in the pleasures of the pain that we can become neither" a I will seek his own, but another time, or he shuns it is so, but we reject the pleasure of all is what man is there it is either held in the pleasures of the pain that we can become neither" a</p>
              </div>
          </main>
        </div>
    </div>
  ) 
}

export default Note;
