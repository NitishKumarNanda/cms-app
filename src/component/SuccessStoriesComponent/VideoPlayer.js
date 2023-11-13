import React from 'react'

export default function VideoPlayer({ video,playPause }) {
    return (
        <video width='100%' autoPlay style={{borderRadius:30, boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.8)'}} onClick={()=>playPause(video.id-1)}>
            <source src={video.video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
    
}