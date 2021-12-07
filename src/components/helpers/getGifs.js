export const getGif = async (categorias) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=10&api_key=qJ0wo4Fc6iy7wd4PxJLP4PLdL3UaiYZz`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map((img) => {
      return {
        id: img.id,
        titulo: img.title,
        url: img.images?.downsized_medium.url,
      }
    })

    return gifs;
  }