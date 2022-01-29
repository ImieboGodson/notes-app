import './collectionCard.css'
import { FcFolder } from "react-icons/fc";
import { Link } from 'react-router-dom';

const CollectionCard = ({ folder }) => {
    return (
        <Link to={`/collections/${folder.id}`} style={{textDecoration: 'none', color: '#000'}}>
            <div className='collectionCard'>
                <div className='collectionCardContent'>
                    <FcFolder className='collectionCardIcons'/>
                    <p>{folder.title}</p>
                </div>
            </div>
        </Link>
    )
}

export default CollectionCard
