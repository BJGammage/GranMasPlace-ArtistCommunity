import  { React,useEffect,useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewArtist = ({allArtist,setAllArtist}) => {

    const {id} = useParams();
    const [oneArtist,setOneArtist] = useState({firstName:"",lastName:"",phone:"",email:"",biography:"",profileImg:"",artAsset1:"",artAsset2:"",artAsset3:"",artAsset4:"",artAsset5:""})
    const navigate = useNavigate();

    useEffect( ()=> {
        axios.get(`http://127.0.0.1:8000/api/artist/${id}`)
        .then( res => setOneArtist(res.data))
        .catch( err => console.log(err))
    }, [id]);

    const deleteArtistProfileHandler = e => {
        axios.delete(`http://127.0.0.1:8000/api/artist/${id}`)
        .then( res => {
            const filteredArtists = allArtist.filter( artist => artist._id !== id)
            setAllArtist(filteredArtists);
            navigate("/artist");
        })
    }

    return (
        <div style={{display:''}}>
            <div style={{backgroundColor:"rebeccapurple"}}>
                <h2>Meet Grand Ma's Artist <p style={{color:"violet"}}>{oneArtist.firstName}</p></h2>
            <img src={oneArtist.profileImg} alt="" />
            <div>
                <p>Name: {oneArtist.firstName} {oneArtist.lastName}</p>
                <ul style={{listStyle:"none"}}>Contacts:
                    <li>Phone: {oneArtist.phone}</li>
                    <li>Email: {oneArtist.email}</li>
                </ul>
                <p>Biography: {oneArtist.biography} </p>
                <button className='btn btn-danger' onClick={deleteArtistProfileHandler}>Remove Profile</button> | <button className='btn btn-info'><Link to={`/artist/${id}/edit`}>Edit Artist Profile</Link></button>
            </div>
            <div>
                <h5>Artists' Assets</h5></div>
                {
                oneArtist.artAsset1 ? 
                <div>
                <p>{oneArtist.artAsset1} <button>Purchase Piece</button></p></div> : <></>
            }
            
            <div><Link to={'/'}>G Ma's Place</Link> || <Link to={'/artist'}>Back to Collection</Link></div>
            </div>
        </div>
    )
}

export default ViewArtist;
