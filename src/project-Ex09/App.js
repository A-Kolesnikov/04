//import logo from '../logo.svg';
import './App.css';
import React from 'react';
import Loading from './loading';
import Playlist from './playlist';
import Player from './player';

function App() {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Loading />
      </div>
      <div className='row'>
        <div className='col-5'>
          <Playlist />
        </div>
        <div className='col-5'>
          <Player />
        </div>

      </div>



    </div>
  )
}

export default App;