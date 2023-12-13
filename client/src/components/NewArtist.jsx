import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const NewArtist = (props) => {

    const { allArtist,setAllArtist }=props;
    const [newArtist,setNewArtist] = useState( {firstName:"",lastName:"",biography:"",phone:"",email:"",password:"",artAsset1:""})
    const [errors,setErrors] = useState('');
    const navigate = useNavigate();
    const newArtistHandler = e => {
        e.preventDefault();
        const createdArtist = {...newArtist}
        axios.post("http://127.0.0.1:8000/api/artist",createdArtist)
        .then( res => {
            setAllArtist( [...allArtist,res.data] );
            navigate("/artist");
        })
        .catch( err => {
            console.log(err.response.data.errors);
            const errArray = [];
            for (const key of Object.keys(err.response.data.errors)){
                errArray.push(err.response.data.errors[key].message);
            }
            setErrors(errArray);
        });
            
    };

    return (
        <div>
            <h3>New Artist Profile</h3>
            <form className="needs-validation" onSubmit={newArtistHandler} noValidate>
                {/* {
                    errors.map( (err) => {
                        return(
                            <p key={err} style={{color:'red'}}>{err}</p>
                        )
                    })
                }; */}
                <div className="form-row">
                    
                    <div className=" mb-3">
                    <label htmlFor="validationTooltip01">First name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationTooltip01" 
                        placeholder="First name" 
                        value={newArtist.firstName} 
                        onChange={ e => setNewArtist( {...newArtist,firstName: e.target.value})} 
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
                        placeholder="Last name" 
                        value={newArtist.lastName} 
                        onChange={ e => setNewArtist( {...newArtist,lastName: e.target.value})}
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
                        value={newArtist.biography} 
                        onChange={ e => setNewArtist( {...newArtist,biography: e.target.value})}>                            
                    </textarea>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail3" 
                        placeholder="Email"
                        value={newArtist.email} 
                        onChange={ e => setNewArtist( {...newArtist,email: e.target.value})} />
                    </div>
                </div>
                
                <div className="form-group row mb-3">
                    <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                    <input 
                        type="phone" 
                        className="form-control" 
                        id="inputPhone3" 
                        placeholder="Phone"
                        value={newArtist.phone} 
                        onChange={ e => setNewArtist( {...newArtist,phone: e.target.value})} />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="inputPassword3" 
                        placeholder="Password" 
                        value={newArtist.password} 
                        onChange={ e => setNewArtist( {...newArtist,password: e.target.value})}/>
                    </div>
                </div>  
                
                <div className="form-group row mb-3">
                    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                    <input 
                        type="Password" 
                        className="form-control" 
                        id="inputPassword4" 
                        placeholder="Confirm Password" 
                        value={newArtist.confirmPassword} 
                        onChange={ e => setNewArtist( {...newArtist,confirmPassword: e.target.value})}/>
                    </div>
                </div>  
                
                <div className="form-group mb-3">
                    <label htmlFor="exampleFormControlFile1">Artist Collection</label><br />
                    <input type="file" className="form-control-file border border-warning" id="exampleFormControlFile1"  />
                </div><br />

                <button className="btn btn-info bg-gradient-info text-white mb-3" type="submit">Submit form</button>

            </form><br />
            <Link to={'/artist'} >Back to Dash</Link>
            <br />
            <Link to={'/'} >Home</Link>
        </div>
    )
};

export default NewArtist;
