import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

const Map = ({ data, navigate, latitudeDelta, longitudeDelta }) => {
  const [focus, setFocus] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    const [firstMarker] = data
    const random = Math.round(Math.random() * (data.length - 1))
    const centerOfEarthCoordinates = { lat: 40.52, lng: 34.34 }

    if (!data.length) {
      setFocus(centerOfEarthCoordinates)
      return
    }

    if (data.length === 1) {
      setFocus(firstMarker)
      return
    }

    setFocus(data[random])
  }, [data])

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: focus.lat,
        longitude: focus.lng,
        latitudeDelta: latitudeDelta || 35,
        longitudeDelta: longitudeDelta || 35,
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
          onPress={() => {
            navigate(marker.id)
          }}
        />
      ))}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: Dimensions.get('window').height / 2,
  },
})

export default Map
