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
      fetch(`https://picsum.photos/id/${photo.id}/200`).then((res) => ({
        ...photo,
        isOk: res.ok,
      }))
    )
  )

const serializePhotos = async (photos) => {
  const availabilities = await checkPhotosAvailability(photos)

  return availabilities.map((photo) => ({
    ...photo,
    url: photo.isOk
      ? `https://picsum.photos/id/${photo.id}/200`
      : 'https://picsum.photos/200',
    thumbnailUrl: photo.isOk
      ? `https://picsum.photos/id/${photo.id}/80`
      : `https://picsum.photos/80`,
  }))
}

export { serializeUsers, serializeAlbums, serializePhotos }
