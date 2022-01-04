import SecondaryNavbar from '../../components/SecondaryNavbar'
import ListComponent from '../../components/ListComponent'
import { useLocation } from 'react-router-dom'
import './collection.css'
import { Folders } from '../../data'

const Collection = () => {

    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const collection = Folders.find(n => n.id.toString() === path)
    console.log(collection)

    return (
        <div className='collection'>
            <div className='inWrapper'>
                <SecondaryNavbar />
                <ListComponent collectionObj={collection}/>
            </div>
        </div>
    )
}

export default Collection
