import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>{count}</Text>
      <Button
        title="Increment value"
        onPress={() => dispatch(increment())}
      />
      <Button
        title="Decrement value"
        onPress={() => dispatch(decrement())}
      />
    </View>
  )
}