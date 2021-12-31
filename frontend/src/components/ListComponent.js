import CollectionCard from './CollectionCard'
import NoteCard from './NoteCard'
import { Folders, Notes } from '../data';
import './listComponent.css'
import AddNewButton from './AddNewButton';

const ListComponent = ({ view }) => {

    // const tapped = 'notes';

    const FoldersListComponent = () => {
        return (
            <>
                { Folders.map((f) => {
                    return <CollectionCard key={f.id} folder={f}/>
                }) }
            </>
        )
    }


    const NotesListComponent = () => {
        return (
            <>
                { Notes.map((n) => {
                    return <NoteCard key={n.id} note={n}/>
                }) }
            </>
        )
    }



    return (
        <div className='listComponent'>
          {
              (view !== 'notes')
              ?
              <FoldersListComponent />
              :
              <NotesListComponent />
          }  
          <AddNewButton view={view}/>
        </div>
    )
}

export default ListComponent
