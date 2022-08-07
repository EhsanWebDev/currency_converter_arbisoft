# Currency Converter App

### Built in react-native

Currency Converter is a cross-plateform (iOS / Android) mobile app.

## Features

- Currency conversion
- Multiple theme support
- Offline data persistance ( User / prefered theme styles)
- Login / logout (mock)

## Tech stack

Currency Converter is built on the following packages:

- [React native] - For cross-plateform app development!
- [react-native-vector-icons] - Free icons by community.
- [styled-components] - Used to build custom common components.
- [prop-types] - For component props type checking.
- [@react-navigation] - To handle app navigation
- [Redux] - To handle app state.
- [redux-saga] - To handle async actions

## Installation

Currency Converter requires [React-Native environment setup](https://reactnative.dev/docs/environment-setup) to run.

After cloning, Install the dependencies and devDependencies

```sh
npm install
```

To run on specific platoform (Android emulator / iOS simulator)

```sh
npx react-native run-android
npx react-native run-ios
```

## Storybook

If your want to enable storybook components you just need to change default App path in

```sh
// index.js

//? Main App
import App from './App';

// ? Storybook app
// import App from "./storybook"

import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => App);
```
