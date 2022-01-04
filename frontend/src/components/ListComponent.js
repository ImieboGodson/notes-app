import CollectionCard from './CollectionCard'
import NoteCard from './NoteCard'
import { Folders, Notes } from '../data';
import './listComponent.css'
import AddNewButton from './AddNewButton';

const ListComponent = ({ view, collectionObj }) => {

    

    const FoldersListComponent = () => {
        return (
            <>
                { 
                    (!collectionObj)
                    ?
                    (Folders.map((f) => {
                        return <CollectionCard key={f.id} folder={f}/>
                    }))
                    :
                    (
                        collectionObj.notes.map((i) => {
                            const filteredNotesByCollection = Notes.filter(n => n.id.toString() === i)
                            return filteredNotesByCollection.map((n) => {
                                return <NoteCard key={n.id} note={n}/>
                            })
                        })
                    )
                 }
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
