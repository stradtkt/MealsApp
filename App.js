import React from 'react';
import {
  StatusBar,
  StyleSheet
} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

const App = () => {

  return (
    <>
      <StatusBar/>
      <CategoryScreen/>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    color: 'white',
    backgroundColor: 'white'
  }
});
StatusBar.setBarStyle('light-content', true);
export default App;
