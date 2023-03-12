import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// import {MainScreen} from './screens/MainScreen';
import {ProductDetailsScreen} from './screens/ProductDetailsScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <MainScreen /> */}
      <ProductDetailsScreen />
    </SafeAreaProvider>
  );
};
export default App;
