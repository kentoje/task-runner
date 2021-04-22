import React from 'react'
import { View, StyleSheet } from 'react-native'
import Map from '../../../components/Map'
import { getMarkersFromUsers } from '../../../lib/map'
import AppText from '../../../components/AppText'

const UserInfos = ({ user }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>User Informations</AppText>
      <AppText style={styles.item}>
        {user.firstName} {user.lastName}
      </AppText>
      <AppText style={styles.item}>{user.companyName}</AppText>
      <AppText style={styles.item}>{user.email}</AppText>
      <AppText style={{ ...styles.item, ...styles.phone }}>{user.phone}</AppText>
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
