import {React} from 'react';
import { Link } from 'react-router-dom';



const Dashboard = ({allArtist}) => {
    
    // const Test = ()=> {
    //     for( let i = 0; i<allArtist.length; i++){
    //         console.log(allArtist[i].contact.phone)
    //     }
    // }
    // Test();

    return (
        <div>
            <h3>Meet GrandMa's Artist</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                    
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Biography</th>
                    <th scope="col">Art Collection</th>
                    <th scope="col">Connect with the Artist</th>
                    <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allArtist.map( artist => {
                            return(
                                <tr scope="row" key={artist._id}>
                                    <td>{artist.firstName}</td>
                                    <td>{artist.lastName}</td>
                                    <td>{artist.biography}</td>
                                    <td>{artist.artAsset1}</td>
                                    <td>{artist.phone} || {artist.email}</td>
                                    <td><Link to={`/artist/${artist._id}`} ><button className='btn btn-primary'>Meet the Artist</button></Link> || <button className='btn btn-warning'>Shop Art</button></td>
                                </tr>
                            )
                        })
                    }                    
                </tbody>
            </table>
            <Link to={'/artist/new/'} ><button className="btn btn-info">Grand Ma's New Artist</button></Link>
        </div>
    )
}

export default Dashboard;
