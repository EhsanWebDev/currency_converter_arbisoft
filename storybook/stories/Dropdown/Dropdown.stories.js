import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { colors } from '../../../src/constants/colors';
import DropDownBtn from '../../../src/Screens/App/Home/components/DropDownBtn';
import store from '../../../src/store/store';
import CenterView from '../CenterView';

storiesOf('Dropdown button', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('with label', () => (
        <Provider store={store}>
            <DropDownBtn title='PKR' />
        </Provider>
    ))
    .add('with click fn', () => (
        <Provider store={store}>
            <DropDownBtn title='PKR' onPress={action("button clicked")} />
        </Provider>
    ))


