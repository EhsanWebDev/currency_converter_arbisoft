
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from '../src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '../src/navigation/MainNavigation';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store)

const App = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <MainNavigation />
                </NavigationContainer>
            </PersistGate>


        </Provider>

    );
};


export default App;
