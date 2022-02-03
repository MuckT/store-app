import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Test </Text>
      <Button
        title="Got To Cart"
        onPress={() =>
          navigation.navigate('Cart')
        }
      />
      <Button
        title="Got To Categories"
        onPress={() =>
          navigation.navigate('Categories')
        }
      />
    </View>
  );
}

export default Home