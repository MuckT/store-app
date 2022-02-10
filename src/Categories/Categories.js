import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useOrientation } from '../utils/useOrientation'
import { reloadCategories, selectCategory } from './reducer'

const Categories = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation() 
  const activeCategory = useSelector(state => state.categories.activeCategory)
  const categories = useSelector(state => state.categories.categoryList)
  const orientation = useOrientation()
  const numColumns = orientation === 'PORTRAIT' ? 2 : 4

  useEffect(() => {
    dispatch(reloadCategories())
  }, [])

  const Item = ({ name, category }) => (
    <View style={styles.item}>
      <TouchableOpacity 
        onPress={() => {
          dispatch(selectCategory(category))
          navigation.navigate('Products')
        }}
        
      >
        <Text style={activeCategory.id === category.id ? styles.selectedCategory : styles.title}>{name}</Text>
        <Image source={require('../assets/sample-image-150x150.png')}/>
      </TouchableOpacity>
    </View>
  )

  const renderItem = ({ item }) => (
    <Item name={item.name} category={item}/>
  )
  

  return (
    <SafeAreaView style={styles.container} scrollIndicatorInsets={{ right: 1 }}>
      <FlatList
        columnWrapperStyle={{justifyContent:'space-around'}}
        showsVerticalScrollIndicator={false}
        data={categories}
        renderItem={renderItem}
        key={(numColumns === 2 ? 'h' : 'v')}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        horizontal={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
  },
  selectedCategory: {
    fontSize: 16,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    backgroundColor: 'grey',
    textAlign: 'center',
  }
})

export default Categories
