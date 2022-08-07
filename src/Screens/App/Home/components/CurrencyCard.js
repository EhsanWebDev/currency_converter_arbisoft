import React from 'react';
import types from "prop-types"
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Container from '../../../../components/StyledComponents/Container';
import CustomInput from '../../../../components/StyledComponents/CustomInput';
import CustomText from '../../../../components/StyledComponents/CustomText';

import { colors } from '../../../../constants/colors';


const HomeInput = styled(Container)`
background-color:${props => props.isDark ? colors.light_gray : colors.dark_gray};
`

const CurrencyCard = ({ onFocus, onBlur, onChange, value, onIconPress, ...rest }) => {
    const { themes, currencyData } = useSelector(store => store)
    const { baseCurrency, secondaryCurrency, currencyValues } = currencyData || {}
    const { date, result, amount } = currencyValues || {}
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}

    return (
        <HomeInput
            isDark={isDarkThemeSelected} mv={20} flex_dir="column"
            mh={0} ph={20} pv={16} border_r={20}
        >
            <CustomText mv={4}>Amount</CustomText>

            <CustomInput onIconPress={onIconPress} boldLabel
                inputLabel={baseCurrency}
                value={value}
                onFocus={onFocus} onBlur={onBlur}
                onChangeText={onChange}
                keyboardType="numeric"
                {...rest}
            />
            {result && <>
                <Container mh={0} mv={8}>
                    <CustomText size={14}>{amount} {baseCurrency} = <CustomText bold size={14}>{result?.toFixed(2)} {secondaryCurrency}</CustomText>  </CustomText>

                </Container>
                <CustomText mh={3} size={14}>Date= {date}</CustomText>
            </>}



        </HomeInput>
    )
}

CurrencyCard.propTypes = {
    value: types.string,
    onChange: types.func,
    onFocus: types.func,
    onBlur: types.func,
    onIconPress: types.func,
}

export default CurrencyCard;