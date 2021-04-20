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
  }))

const serializeAlbums = (albums) =>
  albums.map((album) => ({
    ...album,
    photos: `/photos?albumId=${album.id}`,
  }))

// Slicing photos for now, and replacing actual links with picsum...
const serializePhotos = async (photos) =>
  await Promise.all(
    photos.slice(0, Math.round(photos.length / 10)).map(async (photo) => {
      const res = await fetch(`https://picsum.photos/id/${photo.id}/200`)

      return {
        ...photo,
        url: res.ok
          ? `https://picsum.photos/id/${photo.id}/200`
          : 'https://picsum.photos/200',
        thumbnailUrl: res.ok
          ? `https://picsum.photos/id/${photo.id}/80`
          : `https://picsum.photos/80`,
      }
    })
  )

export { serializeUsers, serializeAlbums, serializePhotos }
