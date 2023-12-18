import {React} from 'react'
import {Link} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import NewArtist from '../components/NewArtist';

const Artist = ({allArtist,setAllArtist}) => {
    
    return (
            <>
            <div>
                <Dashboard allArtist={allArtist} />                
                <Link to={"/"}>Home</Link>
            </div>            
            </>
        
    )
}

export default Artist
