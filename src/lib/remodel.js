import { pickColor } from './colors'
import COORDINATES from '../data/coordinates'

const fullName = (name) => {
  const [firstName, lastName] = name.split(' ')

  return {
    firstName,
    lastName,
  }
}

const random = (min = 1, max = 3) => Math.floor(Math.random() * (max - min)) + min

const remodelUsers = (users) =>
  users.map(({ id, name, username, email, phone, company }) => {
    const {
      geoCode: { lat, lng },
    } = COORDINATES[random(0, COORDINATES.length)]

    return {
      id,
      ...fullName(name),
      username,
      companyName: company.name,
      email,
      phone,
      geoCode: {
        lat,
        lng,
      },
      todos: `/todos?userId=${id}`,
      albums: `/albums?userId=${id}`,
      posts: `/posts?userId=${id}`,
      color: pickColor(id),
    }
  })

const remodelAlbums = (albums) =>
  albums.map((album) => ({
    ...album,
    photos: `/photos?albumId=${album.id}`,
  }))

// Slicing photos for now, and replacing actual links with picsum...
const checkPhotosAvailability = (photos) =>
  Promise.all(
    photos.slice(0, random(1, 15)).map((photo, index) =>
      fetch(`https://picsum.photos/id/${photo.id}/500`)
        .then((res) => ({
          ...photo,
          isOk: res.ok,
          count: ++index,
        }))
        .catch((err) => {
          console.error(err)
        })
    )
  )

const remodelPhotos = async (photos) => {
  const availabilities = await checkPhotosAvailability(photos)

  return Promise.all(
    availabilities.map(async (photo) => {
      if (photo.isOk) {
        try {
          const urlRes = await fetch(`https://picsum.photos/id/${photo.id}/500`)
          const thumbnailUrl = await fetch(`https://picsum.photos/id/${photo.id}/80`)

          return {
            ...photo,
            url: urlRes.url,
            thumbnailUrl: thumbnailUrl.url,
          }
        } catch (err) {
          console.error(err)
        }
      }

      try {
        const urlRes = await fetch('https://picsum.photos/500')

        return {
          ...photo,
          url: urlRes.url,
          thumbnailUrl: urlRes.url,
        }
      } catch (err) {
        console.error(err)
      }
    })
  )
}

export { remodelUsers, remodelAlbums, remodelPhotos }
