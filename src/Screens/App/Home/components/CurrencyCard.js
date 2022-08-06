import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Container from '../../../../components/StyledComponents/Container';
import CustomInput from '../../../../components/StyledComponents/CustomInput';
import CustomText from '../../../../components/StyledComponents/CustomText';
import { colors } from '../../../../constants/colors';
import types from "prop-types"

const HomeInput = styled(Container)`
background-color:${props => props.isDark ? colors.light_gray : colors.dark_gray};
`

const CurrencyCard = ({ onFocus, onBlur, onChange, value, ...rest }) => {
    const { themes, currencyData } = useSelector(store => store)
    const { baseCurrency, secondaryCurrency } = currencyData || {}
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}
    return (
        <HomeInput
            isDark={isDarkThemeSelected} mv={20} flex_dir="column"
            mh={0} ph={20} pv={16} border_r={20}
        >
            <CustomText mv={4}>Amount</CustomText>

            <CustomInput boldLabel
                inputLabel={baseCurrency}
                value={value} onChange={onChange}
                onFocus={onFocus} onBlur={onBlur}
                {...rest}
            />
            <Container mh={0} mv={8}>
                <CustomText size={14}>100 {baseCurrency} = <CustomText bold size={14}>9.14 {secondaryCurrency}</CustomText></CustomText>
            </Container>

        </HomeInput>
    )
}

CurrencyCard.propTypes = {
    value: types.string,
    onChange: types.func,
    onFocus: types.func,
    onBlur: types.func,
}

export default CurrencyCard;