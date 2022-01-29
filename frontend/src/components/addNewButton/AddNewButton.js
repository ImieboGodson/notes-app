import { IoAddSharp } from "react-icons/io5";
import './addNewButton.css'

const AddNewButton = ({ view }) => {
    return (
        <div className='addNewButton'>
            <IoAddSharp className='addNewButtonIcon'/>
            <p className='addNewButtonText'>{`Add new ${view === 'notes' ? 'note' : 'collection'}`}</p>
        </div>
    )
}

export default AddNewButton
