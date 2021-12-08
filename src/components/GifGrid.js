import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import Swal from 'sweetalert2'

function GifGrid({ categorias }) {
  const { data: images, loading } = useFetchGifs(categorias)

  return (
    <>
    
      <h1>
        <strong>{categorias}</strong>
      </h1>

      {loading && <div className="spinner animate__fadeInDownBig"></div>}
  
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}

export default GifGrid
