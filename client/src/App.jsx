import { React, useState, useEffect } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Home from './components/Home';
import ArtistView from './views/Artist';
import ShopView from './views/Shop';
import NewArtist from './components/NewArtist';

function App() {
  const [allArtist,setAllArtist] = useState( [] );

  useEffect( ()=> {
      axios.get("http://127.0.0.1:8000/api/artist")
      .then( res => {
          console.log(res.data);
          setAllArtist(res.data);
      })
      .catch( err => console.log(err));
      }, []);

  return (
    <div style={{width: 1200}}>
      <BrowserRouter>
        <h1>Grand Ma's Place</h1>
        <Routes>
          <Route path='/artist' element={ <ArtistView allArtist={allArtist} />} />
          <Route path='/shop' element={ <ShopView /> } />
          <Route exact path='/' element={ <Home default/>} />
          <Route path='/artist/new/' element={ <NewArtist allArtist={allArtist} setAllArtist={setAllArtist} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
