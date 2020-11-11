import React from 'react'

const video_list_item = ({video,onVideoSelect}) => {

    const image_url=video.snippet.thumbnails.default.url
    const heading=video.snippet.title

    return (
        <li onClick={()=>onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                <img className="media-object" src={image_url} alt="loading"/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{heading}</div>
                </div>
            </div>
        </li>
    )
}

export default video_list_item
