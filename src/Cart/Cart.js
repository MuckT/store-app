import React from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './reducer'
import { useNavigation } from '@react-navigation/native'

// TODO: Add Button for editing quantity
// TODO: Add Button for increasing quantity by 1 - current behavior of 'Add to Cart'

const Cart = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const cart = useSelector(state => state.cart.cartList)

  const Item = ({ name, product }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name} - {product.quantity}</Text>
      <Image source={require('../assets/sample-image-300x300.png')}/>
      <Button title="Remove" onPress={() => {
        dispatch(removeFromCart(product))
        navigation.navigate('Products')
      }}/>
    </View>
  )

  const renderItem = ({ item }) => (
    <Item name={item.name} product={item}/>
  )

  return (
    <SafeAreaView style={styles.container} scrollIndicatorInsets={{ right: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={1}
        horizontal={false}
      />
    </SafeAreaView>
  )
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

export default Cart
