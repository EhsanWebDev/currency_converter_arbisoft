/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react-native'
import { jest } from '@jest/globals'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import CustomBtn from '../src/components/StyledComponents/CustomBtn';
import DropDownBtn from '../src/Screens/App/Home/components/DropDownBtn';

describe('<CustomBtn/>', () => {

  it('Calls onPress', async () => {
    const onPress = jest.fn()
    const testId = 'button';

    const { getByTestId } = render(
      <DropDownBtn title='USD' onPress={onPress} testId={testId} />
    )

    const button = getByTestId(testId)

    fireEvent.press(button)

    expect(onPress).toHaveBeenCalledTimes(1)

  })

})
