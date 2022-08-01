
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';


const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>

    </Provider>

  );
};


export default App;
