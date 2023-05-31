import React from 'react'
import './Search_Results.css'

function Search_Results({results}) {
    
  return (
    <div>
        {results.map((result) => {
            console.log(result);
            const title = result.snippet.title;
            const description = result.snippet.description;
            const channelName = result.snippet.channelTitle;
            return (
                <div className="card" key={result.etag}>
                    <div className="thumbnail">
                        <img src={result.snippet.thumbnails.medium.url} alt="Video Thumbnail"/>
                    </div>
                    <div className="content">
                        <h2 className="title">{title}</h2>
                        <span className="channel">{channelName}</span>
                        <p className="description">{description}</p>
                        {/* <span className="views">100K views</span>    */}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Search_Results