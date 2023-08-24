import React from 'react'

const GifGridItem = ({ gif }) => {

    const { title, url } = gif;

    return (
        <div className="card m-2">
            <img className='img-fluid' src={url} alt={title} />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    )
}

export default GifGridItem