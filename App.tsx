import {StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './src/navigator/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/Store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
