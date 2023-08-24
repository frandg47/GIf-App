import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import LoadingGIfs from './LoadingGIfs'

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category)
  return (
    <div>
      <h5 className='text-center'>Mejores GIF de "{category}"</h5>
      <div className="container">
        {loading && <LoadingGIfs />}
        <div className="row">
          {
            data.map(gif => (
              <div className="col-md-4 col-lg-4 col-xs-12 col-sm-6" key={gif.id}>
                <GifGridItem gif={gif} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default GifGrid