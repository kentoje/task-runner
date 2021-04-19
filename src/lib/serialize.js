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
      lat: address.geo.lat,
      lng: address.geo.lng,
    },
    todos: `/todos?userId=${id}`,
    albums: `/albums?userId=${id}`,
    posts: `/posts?userId=${id}`,
  }))

export { serializeUsers }
