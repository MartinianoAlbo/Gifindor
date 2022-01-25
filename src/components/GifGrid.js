import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 'auto',
    height: 'auto',
  
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))



function GifGrid({ categorias }) {
  
  const classes = useStyles()
  const { data: images, loading } = useFetchGifs(categorias);
  

  return (
    <>
      <h1>
        <strong>{categorias}</strong>
      </h1>

      {loading && <div className="spinner animate__fadeInDownBig"></div>}

      <div className={classes.root}>
        <ImageList rowHeight={180} className={classes.imageList}>
          {images.map((item) => (
            
            <ImageListItem key={item.id}>
            
              <img src={item.url} alt={item.titulo} />
              
              <ImageListItemBar
                title={item.titulo}
                subtitle={<span>by: AlvaroDev </span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.titulo}`}
                    className={classes.icon}
                  >

                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

    </>
  )
}

export default GifGrid
