import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Map from '../../../components/Map'
import { getMarkersFromUsers } from '../../../lib/map'

const UserInfos = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Informations</Text>
      <Text style={styles.item}>
        {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.item}>{user.companyName}</Text>
      <Text style={styles.item}>{user.email}</Text>
      <Text style={[styles.item, styles.phone]}>{user.phone}</Text>
      <Map style={styles.map} data={getMarkersFromUsers([user])} navigate={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 4,
  },
  phone: {
    marginBottom: 16,
  },
})

export default UserInfos
