/**
 * @format
 */

import { AppRegistry } from 'react-native';

//? Main App
import App from './App';

// ? Storybook app
// import App from "./storybook"

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
