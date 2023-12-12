import {React} from 'react';
import { Link } from 'react-router-dom';



const Dashboard = (props) => {
    const {allArtist} = props;
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
                                    <td>{artist.artCollection}</td>
                                    <td>{artist.email}</td>
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
