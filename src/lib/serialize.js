import { pickColor } from './colors'

const fullName = (name) => {
  const [firstName, lastName] = name.split(' ')

  return {
    firstName,
    lastName,
  }
}

const serializeUsers = (users) =>
  users.map(({ id, name, username, email, phone, company, address }) => ({
    id,
    ...fullName(name),
    username,
    companyName: company.name,
    email,
    phone,
    geoCode: {
      lat: Number(address.geo.lat),
      lng: Number(address.geo.lng),
    },
    todos: `/todos?userId=${id}`,
    albums: `/albums?userId=${id}`,
    posts: `/posts?userId=${id}`,
    color: pickColor(id),
  }))

const serializeAlbums = (albums) =>
  albums.map((album) => ({
    ...album,
    photos: `/photos?albumId=${album.id}`,
  }))

// Slicing photos for now, and replacing actual links with picsum...
const checkPhotosAvailability = (photos) =>
  Promise.all(
    photos.slice(0, Math.round(photos.length / 10)).map((photo) =>
      fetch(`https://picsum.photos/id/${photo.id}/500`).then((res) => ({
        ...photo,
        isOk: res.ok,
      }))
    )
  )

const serializePhotos = async (photos) => {
  const availabilities = await checkPhotosAvailability(photos)

  return Promise.all(
    availabilities.map(async (photo) => {
      if (photo.isOk) {
        const urlRes = await fetch(`https://picsum.photos/id/${photo.id}/500`)
        const thumbnailUrl = await fetch(`https://picsum.photos/id/${photo.id}/80`)

        return {
          ...photo,
          url: urlRes.url,
          thumbnailUrl: thumbnailUrl.url,
        }
      }

      const urlRes = await fetch('https://picsum.photos/500')

      return {
        ...photo,
        url: urlRes.url,
        thumbnailUrl: urlRes.url,
      }
    })
  )
}

export { serializeUsers, serializeAlbums, serializePhotos }
