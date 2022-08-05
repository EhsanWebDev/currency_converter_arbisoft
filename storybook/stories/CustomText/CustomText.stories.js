import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import CustomText from '../../../src/components/StyledComponents/CustomText';
import { colors } from '../../../src/constants/colors';
import store from '../../../src/store/store';
import CenterView from '../CenterView';

storiesOf('Custom Text', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('with text', () => (
        <Provider store={store}>
            <CustomText color="black">
                {text('text', 'Hello World')}
            </CustomText>
        </Provider>
    ))
    .add('with text color', () => (
        <Provider store={store}>
            <CustomText color={colors.blue}>
                {text('text color', 'Hello World')}
            </CustomText>
        </Provider>
    ))
    .add('with text size', () => (
        <Provider store={store}>
            <CustomText color={colors.blue} size={30}>
                {text('text color', 'Hello World')}
            </CustomText>
        </Provider>
    ))
    .add('with font weight bold', () => (
        <Provider store={store}>
            <CustomText color={colors.blue} size={20} bold>
                {text('text color', 'Hello World')}
            </CustomText>
        </Provider>
    ))
