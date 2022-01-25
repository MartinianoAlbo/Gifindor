const getGif = async (categorias) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=50&api_key=qJ0wo4Fc6iy7wd4PxJLP4PLdL3UaiYZz`
    const resp = await fetch(url)
    const { data } = await resp.json()

    console.log(data);

    const gifs = data.map((img) => {
      return {
        id: img.id,
        titulo: img.title,
        url: img.images?.downsized_medium.url,
      }
    })

    console.log(gifs);

    return gifs;
  }

export default getGif;