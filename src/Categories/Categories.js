import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../data/categories';
import { selectCategory } from './reducer';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch()
  const activeCategory = useSelector(state => state.categories.activeCategory)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Categories</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      {categories.map(category => 
        <Button
          idx={category.id} 
          title={activeCategory.id === category.id ? `${category.name} ✅` : category.name}
          onPress={() => {
            dispatch(selectCategory(category))
          }}
        />
      )}
    </View>
  );
}

export default Categories