import React from "react";

function VideoContent(props) {
    const srcVid = props.srcVid
    console.log(srcVid)
    return (
        <div>
            {/* <video src={props.srcVideo} className="object-fit-contain" autoPlay /> */}
            
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsve-item" src={srcVid} title="YouTube video" allowFullScreen></iframe>
            </div>
        </div>

    )
}

export default VideoContent;