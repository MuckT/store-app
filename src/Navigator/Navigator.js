import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Cart from '../Cart/Cart';
import Categories from '../Categories/Categories';
import Home from '../Home/Home';

const Tab = createBottomTabNavigator();
const CartStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();

function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Categories" component={Categories} />
      <CategoryStack.Screen name="Home" component={Home} />
    </CategoryStack.Navigator>
  );
}

function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Home" component={Home} />
    </CartStack.Navigator>
  );
}


export default function MyNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Categories" component={CategoryStackScreen} />
      <Tab.Screen name="Cart" component={CartStackScreen} />
      {/* <Tab.Screen name="Home" component={Home} options={{
          tabBarStyle: { height: 0, width: 0 }
        }}/> */}
    </Tab.Navigator>
  )
};
