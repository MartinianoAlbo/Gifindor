import React from 'react'

export const GifGridItem = ({id, titulo, url}) => {
   console.log(titulo);
   return (
      <div id={id} className='card'>
         <img  src={url} alt={titulo} />
         <p>{titulo}</p>
         
      </div>
   )
}
