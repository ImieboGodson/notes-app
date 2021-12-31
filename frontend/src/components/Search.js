import './search.css'
import { CgSearch } from "react-icons/cg";

const Search = () => {
    return (
        <div className='searchBox'>
            <button> <CgSearch /> </button>
            <input type='search' placeholder='Search' title='Search'/>
        </div>
    )
}

export default Search
