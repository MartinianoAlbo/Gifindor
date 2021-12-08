import { useState, useEffect } from 'react'
import getGif from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    titulo: '',
    loading: true,
  })

  useEffect(() => {
    getGif(categoria).then((imgs) => {
      setState({
        data: imgs,
        titulo: imgs.titulo,
        loading: false,
      })
    })
  }, [categoria])

  

  return state
}
