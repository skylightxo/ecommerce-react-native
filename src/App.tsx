import React from 'react';
import {useColorScheme, ViewStyle} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainScreen} from './screens/MainScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <MainScreen />
    </SafeAreaProvider>
  );
};
export default App;
