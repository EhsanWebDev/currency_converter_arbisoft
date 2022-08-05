import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import OptionItem from '../../../src/components/StyledComponents/OptionItem';
import store from '../../../src/store/store';

storiesOf('Option Item', module)
    .add('with text and default icon', () => (
        <Provider store={store}>
            <OptionItem title='Hello' />
        </Provider>
    ))
    .add('with customize icon', () => (
        <Provider store={store}>
            <OptionItem title='Link Icon' iconName='link-outline' />
        </Provider>
    ))
    .add('with click fn', () => (
        <Provider store={store}>
            <OptionItem title='Link Icon' iconName='link-outline' onItemPress={action('clicked option item')} />
        </Provider>
    ))
