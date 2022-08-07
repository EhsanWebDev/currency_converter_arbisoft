import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import CustomInput from '../../../src/components/StyledComponents/CustomInput';
import { colors } from '../../../src/constants/colors';
import store from '../../../src/store/store';
import CenterView from '../CenterView';

storiesOf('Custom Input', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('with label', () => (
        <Provider store={store}>
            <CustomInput inputLabel='PKR' />
        </Provider>
    ))
    .add('with bold label', () => (
        <Provider store={store}>
            <CustomInput inputLabel='PKR' boldLabel />
        </Provider>
    ))
    .add('with custom icon', () => (
        <Provider store={store}>
            <CustomInput inputLabel='PKR' iconName='home' />
        </Provider>
    ))
    .add('with icon button press', () => (
        <Provider store={store}>
            <CustomInput inputLabel='PKR' iconName='home' onIconPress={action('icon pressed')} />
        </Provider>
    ))
    .add('without icon', () => (
        <Provider store={store}>
            <CustomInput inputLabel='PKR' hideInputIcon />
        </Provider>
    ))

