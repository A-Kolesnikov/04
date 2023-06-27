import React from 'react';
import Loading from './loading';
import Playlist from './playlist';
import VideoContent from './videoContent';
import { useState } from 'react';

const movies = [
    {
        "id": 1,
        "name": "A Ha - Take On Me",
        "file": "https://www.youtube.com/embed/djV11Xbc914",
        "isPlaying": false
    },
    {
        "id": 2,
        "name": "El Chombo - Dame Tu Cosita feat. Cutty Ranks",
        "file": "/videos/video-01.mp4",
        "isPlaying": false
    },
    {
        "id": 3,
        "name": "Lofi Boy - The Struggle In The 90s",
        "file": "/videos/video-02.mp4",
        "isPlaying": false
    }
]
function Player() {
    const [srcVid, SetSrcVid] = useState(movies[0].file)
    return (
        <div className='row justify-content-center'>
            <div className='col-10'>
                <div className='row justify-content-center'>
                    <div className='col-5'>
                        <Playlist movies={movies} handleClick={SetSrcVid} />
                    </div>
                    <div className='col-5'>
                        <VideoContent srcVid = {srcVid} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;