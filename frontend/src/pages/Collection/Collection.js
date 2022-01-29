import SecondaryNavbar from '../../components/secondaryNavbar/SecondaryNavbar'
import ListComponent from '../../components/listComponent/ListComponent'
import { useLocation } from 'react-router-dom'
import './collection.css'
import { Folders } from '../../data'
// import Header from '../../components/Header'

const Collection = () => {

    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const collection = Folders.find(n => n.id.toString() === path)
    console.log( 'Collection:', collection)
    console.log( 'Location:', location)

    return (
        <div className='collection'>
            {/* <Header /> */}
            <div className='inWrapper'>
                <SecondaryNavbar collectionTitle={collection.title}/>
                <ListComponent collectionObj={collection}/>
            </div>
        </div>
    )
}

export default Collection
