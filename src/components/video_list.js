import React from 'react'
import Video_list_item from './video_list_item'

const video_list = (props) => {
    const videoItems = props.videos.map((video)=>{
        return <Video_list_item
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    })
    return (
        <div>
            <ul className="col-md-4 list group">
            {videoItems}
            </ul>
        </div>
    )
}

export default video_list
