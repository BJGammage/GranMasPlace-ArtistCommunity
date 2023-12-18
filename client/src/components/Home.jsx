import {React} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'
import GMasPlaceVid from '../assets/GrandMasPlace_Video.mp4'

const Home = () => {
    return (
        <div  className='main'>
            <h2>An Artist Suite</h2> 
            <video src={GMasPlaceVid} autoPlay loop muted></video>
            <div  className='container'>
                <nav className="nav nav-pills nav-justified" style={{border: " solid rebeccapurple 5px", borderRadius:"15px", padding:"5px"}}>
                    <a className="nav-item nav-link active" href="/artist"> Artist</a>
                            {/* onHover Handler  dropdown  
                                <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="..." alt="Card image cap">
                                <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div> 
                            */}

                    <a className="nav-item nav-link" href="/shop">Shop</a>
                    <a className="nav-item nav-link" href="#">Resources</a>
                    {/* <p>
                        <a className="btn btn-info" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                        <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                        <button className="btn btn-info" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                    </p>
                        <div className="row">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                            </div>
                            </div>
                            <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                            <div className="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                            </div>
                            </div>
                        </div> */}
                </nav>
            </div>  
        </div>
    )
}

export default Home;
