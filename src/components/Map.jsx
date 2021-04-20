import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

const Map = ({ data, navigation }) => {
  const [focus, setFocus] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    if (data.length) {
      const [firstMarker] = data
      const random = Math.round(Math.random() * (data.length - 1))

      data.length === 1 ? setFocus(firstMarker) : setFocus(data[random])
    }
  }, [data])

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: focus.lat,
        longitude: focus.lng,
        latitudeDelta: 30,
        longitudeDelta: 30,
      }}
    >
      {data.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.lat,
            longitude: marker.lng,
          }}
          title={marker.title}
          onPress={() =>
            navigation.navigate('Dashboard', { userId: marker.id })
          }
        />
      ))}
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: 300,
  },
})

export default Map
