import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import Header from '../../../src/components/StyledComponents/Header';
import { colors } from '../../../src/constants/colors';
import store from '../../../src/store/store';
import CenterView from '../CenterView';

storiesOf('Header', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('with title', () => (
        <Provider store={store}>
            <Header title='Header text' />
        </Provider>
    ))
    .add('with back button click', () => (
        <Provider store={store}>
            <Header title='Header text' onBackPress={action("on back press")} />
        </Provider>
    ))

