import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyNavigation from '../Navigator/Navigator';
import store from './store'
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

let persistor = persistStore(store)

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <MyNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
