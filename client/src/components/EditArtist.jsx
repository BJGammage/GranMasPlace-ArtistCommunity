import {React,useEffect,useState} from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';

const EditArtist = ({allArtist,setAllArtist}) => {
    const [editArtist,setEditArtist] = useState({})
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect( ()=> {
        axios.get( `http://127.0.0.1:8000/api/artist/${id}`)
        .then( res => setEditArtist(res.data))
        .catch( err => console.log(err))
    });

    const editArtistHandler = e => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/artist/${id}`,editArtist)
        .then( res => {
            const updatedArtists = allArtist.map( artist => {
                artist._id === id ? updatedArtists.push(res.data) : updatedArtists.push(artist)
            })
            setAllArtist(updatedArtists);
            navigate(`/artist/${editArtist.id}`)
        })
    };

    return (
        <div>
            <form onSubmit={editArtistHandler}>
            <div className="form-row">
                        
                        <div className=" mb-3">
                        <label htmlFor="validationTooltip01">First name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationTooltip01" 
                            value={editArtist.firstName}                        
                            onChange={ (e) => {setEditArtist( {...editArtist,[e.target.name]: e.target.value})}} 
                            />
                        <div className="valid-tooltip">
                            Looks good!
                        </div>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="validationTooltip02">Last name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationTooltip02" 
                            value={editArtist.lastName}          
                            onChange={ e => setEditArtist( {...editArtist,lastName: e.target.value})}
                            />
                        <div className="valid-tooltip">
                            Looks good!
                        </div>
                        </div>

                    </div>
                    
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleFormControlTextarea1">Biography</label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            value={editArtist.biography}
                            onChange={ e => setEditArtist( {...editArtist,biography: e.target.value})}>                            
                        </textarea>
                    </div>

                    <div className="form-group row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="inputEmail3" 
                            value={editArtist.email}
                            onChange={ e => setEditArtist( {...editArtist,email: e.target.value})} />
                        </div>
                    </div>
                    
                    <div className="form-group row mb-3">
                        <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                        <input 
                            type="phone" 
                            className="form-control" 
                            id="inputPhone3" 
                            value={editArtist.phone}
                            onChange={ e => setEditArtist( {...editArtist,phone: e.target.value})} />
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputPassword3" 
                            value="Password" 
                            onChange={ e => setEditArtist( {...editArtist,password: e.target.value})}/>
                        </div>
                    </div>  
                    
                    <div className="form-group row mb-3">
                        <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                        <input 
                            type="Password" 
                            className="form-control" 
                            id="inputPassword4" 
                            value="Confirm Password"                         
                            onChange={ e => setEditArtist( {...editArtist,confirmPassword: e.target.value})}/>
                        </div>
                    </div>  
                    
                    <div className="form-group mb-3">
                        <label htmlFor="exampleFormControlFile1">Artist Collection</label><br />
                        <input type="file" className="form-control-file border border-warning" id="exampleFormControlFile1"  />
                    </div><br />

                    <button className="btn btn-info bg-gradient-info text-white mb-3" type="submit">Submit form</button>
            </form>
            <Link to={"/artist"}>To Artists</Link> | <Link to={"/"}>Home</Link>
        </div>
        )
}

export default EditArtist;
