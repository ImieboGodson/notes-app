import FolderComponent from './folderComponent'
import NoteComponent from './noteComponent'
import { Folders, Notes } from '../data';
import './listComponent.css'

const listComponent = () => {

    const tapped = 'notes';

    const FoldersListComponent = () => {
        return (
            <>
                { Folders.map((f) => {
                    return <FolderComponent key={f.id} folder={f}/>
                }) }
            </>
        )
    }


    const NotesListComponent = () => {
        return (
            <>
                { Notes.map((n) => {
                    return <NoteComponent key={n.id} note={n}/>
                }) }
            </>
        )
    }



    return (
        <div className='listComponent'>
          {
              (tapped !== 'notes')
              ?
              <FoldersListComponent />
              :
              <NotesListComponent />
          }  
        </div>
    )
}

export default listComponent
