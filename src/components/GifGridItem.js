import React from 'react'

export const GifGridItem = ({id, titulo, url}) => {
   return (
      <>
      <a id={id} href={url} className='animate__animated animate__fadeInDown'>
      <div  className='card'>
         
         <img  src={url} alt={titulo} />
         <p>{titulo}</p>
         
      </div>
      </a>
      </>
   )
}
