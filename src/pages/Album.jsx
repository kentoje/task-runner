import React, { useState } from 'react'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4)

const Album = ({ route }) => {
  const {
    params: { photos },
  } = route
  const [index, setIndex] = useState(0)

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.url }} style={styles.image} />
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Album Photos</Text>
      <Carousel
        layout={'stack'}
        data={photos}
        renderItem={renderItem}
        itemWidth={ITEM_WIDTH}
        sliderWidth={SLIDER_WIDTH}
        onSnapToItem={(itemIndex) => setIndex(itemIndex)}
      />
      <Pagination dotsLength={photos.length} activeDotIndex={index} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 100,
  },
  itemContainer: {
    flex: 1,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
})
export default Album
