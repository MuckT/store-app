import React from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useOrientation } from '../utils/useOrientation';
import { selectProduct } from './reducer';
import { products } from '../data/products';

const Products = ({ navigation }) => {
  const dispatch = useDispatch()
  const activeCategory = useSelector(state => state.categories.activeCategory)
  const filteredProducts = products.filter(product => product.category === activeCategory.name)
  console.log('filteredProducts',filteredProducts)
  const orientation = useOrientation()
  const numColumns = orientation === 'PORTRAIT' ? 1 : 2

  const Item = ({ name, product }) => (
    <View style={styles.item}>
      <TouchableOpacity 
        onPress={() => {
          dispatch(selectProduct(product))
        }}>
        <Text style={styles.title}>{name}</Text>
        <Image source={require('../assets/sample-image-300x300.png')}/>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.name} product={item}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredProducts}
        renderItem={renderItem}
        key={(numColumns === 2 ? 'h' : 'v')}
        keyExtractor={product => product.id}
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
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 20
  },
  item: {
    flexDirection: 'row',
    padding: 20,
  },
  title: {
    width: 300,
    fontSize: 16,
    backgroundColor: 'grey',
    textAlign: 'center',
    flex: 1, 
    flexWrap: 'wrap'
  }
})

export default Products
