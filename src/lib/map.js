const getMarkersFromUsers = (users) =>
  users.map((user) => ({
    id: user.id,
    lat: user.geoCode.lat,
    lng: user.geoCode.lng,
    title: `${user.firstName} ${user.lastName}`,
  }))

export { getMarkersFromUsers }
