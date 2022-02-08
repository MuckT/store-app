import React from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../data/categories';
import { useOrientation } from '../utils/useOrientation';
import { selectCategory } from './reducer';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch()
  const activeCategory = useSelector(state => state.categories.activeCategory)
  const orientation = useOrientation()
  const numColumns = orientation === 'PORTRAIT' ? 2 : 4

  const Item = ({ name, category }) => (
    <View style={styles.item}>
      <TouchableOpacity 
        onPress={() => {
          dispatch(selectCategory(category))
        }}
        
      >
        <Text style={activeCategory.id === category.id ? styles.selectedCategory : styles.title}>{name}</Text>
        <Image source={require('../assets/sample-image.png')}/>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.name} category={item}/>
  );
  

  return (
    <SafeAreaView style={styles.container} scrollIndicatorInsets={{ right: 1 }}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        key={(numColumns === 2 ? 'h' : 'v')}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        horizontal={false}
      />
    </SafeAreaView>
  );
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
