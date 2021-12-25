import './folderComponent.css'
import { CgNotes } from "react-icons/cg";

const folderComponent = ({ folder }) => {
    return (
        <div className='folderComponent'>
        <div className='folderContent'>
            <CgNotes className='folderIcons'/>
            <p>{folder.title}</p>
        </div>
        </div>
    )
}

export default folderComponent
