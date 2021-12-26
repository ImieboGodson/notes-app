import './collectionCard.css'
import { CgNotes } from "react-icons/cg";

const CollectionCard = ({ folder }) => {
    return (
        <div className='collectionCard'>
        <div className='collectionCardContent'>
            <CgNotes className='collectionCardIcons'/>
            <p>{folder.title}</p>
        </div>
        </div>
    )
}

export default CollectionCard
