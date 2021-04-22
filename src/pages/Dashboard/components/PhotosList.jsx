import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import AppText from '../../../components/AppText'
import PhotosListItem from './PhotosListItem'

const PhotosList = ({ photos }) => {
  const previews = photos.slice(0, 3)
  const [{ count }] = photos.slice(-1)
  const photosLeft = count - previews.length

  const renderItem = ({ item }) =>
    item.count !== previews.length ? (
      <PhotosListItem item={item} />
    ) : (
      <>
        <PhotosListItem item={item} />
        <View style={styles.countWrapper}>
          <AppText style={styles.itemLeft}>+{photosLeft}</AppText>
        </View>
      </>
    )

  return (
    <View style={styles.container}>
      <FlatList
        data={previews}
        horizontal
        renderItem={renderItem}
        keyExtractor={(photo) => String(photo.id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E9E9E9',
  },
  countWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E9E9E9',
    width: 50,
    height: 50,
  },
  itemLeft: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default PhotosList
