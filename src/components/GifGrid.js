import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'
import { getGif } from './helpers/getGifs';

function GifGrid({ categorias }) {
  
  // const [images, setImages] = useState([])

  const {loading} = useFetchGifs();


  // useEffect(() => {
  //   getGif(categorias)
  //     .then(setImages)
  // }, [categorias])



  return (
    <>
      <h3>{categorias}</h3>

      {loading ? 'cargando.. ' : 'Data cargada..'}
      {/* <div className='card-grid'>
      
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  )
}

export default GifGrid
