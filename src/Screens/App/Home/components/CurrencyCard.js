import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Container from '../../../../components/StyledComponents/Container';
import CustomInput from '../../../../components/StyledComponents/CustomInput';
import CustomText from '../../../../components/StyledComponents/CustomText';

const HomeInput = styled(Container)`
background-color:${props => props.isDark ? "rgba(255, 255, 255, 0.3)" : " rgba(0, 0, 0, 0.1)"};
`

const CurrencyCard = ({ onFocus, onBlur }) => {
    const { themes, currencyData } = useSelector(store => store)
    const { isLoading, currency, baseCurrency, secondaryCurrency } = currencyData || {}
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}
    return (
        <HomeInput isDark={isDarkThemeSelected} mv={20} flex_dir="column" mh={0} ph={20} pv={16} border_r={20}>
            <CustomText mv={4} size={18}>Amount</CustomText>
            <CustomInput onFocus={onFocus} onBlur={onBlur} />
            <Container mh={0} mv={8}>
                <CustomText size={14}>100 {baseCurrency} = <CustomText bold size={14}>9.14 {secondaryCurrency}</CustomText></CustomText>
            </Container>

        </HomeInput>
    )
}

export default CurrencyCard;