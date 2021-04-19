import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

const Map = ({ data, navigation }) => {
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: -37,
        longitude: 81,
        latitudeDelta: 100,
        longitudeDelta: 100,
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
