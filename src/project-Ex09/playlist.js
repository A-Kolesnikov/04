import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

function Playlist(props) {
    const movies = props.movies
    
    const handleClick = (address) => props.handleClick(address)
    const list = movies.map(element => (<li className="list-group-item" style={{backgroundColor: "#b4bac1"}} key={element.id} onClick={() => handleClick(element.file)}>
        <FontAwesomeIcon icon={faPause} />{" "} {element.name}
        </li>))
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item active">Choose a Video</li>
                {list}
            </ul>
        </div>
    )
}

export default Playlist;