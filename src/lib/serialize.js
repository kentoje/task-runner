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
const serializePhotos = (photos) =>
  photos
    .map((photo) => ({
      ...photo,
      url: 'https://picsum.photos/200',
      thumbnailUrl: 'https://picsum.photos/200',
    }))
    .slice(0, Math.round(photos.length / 10))

export { serializeUsers, serializeAlbums, serializePhotos }
