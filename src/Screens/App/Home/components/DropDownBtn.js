import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CustomBtn from '../../../../components/StyledComponents/CustomBtn';
import CustomText from '../../../../components/StyledComponents/CustomText';
import IonIcon from "react-native-vector-icons/Ionicons"
import { colors } from '../../../../constants/colors';


const HomeBtn = styled(CustomBtn)`
padding: 14px 30px;
background-color:${props => props.isDark ? "rgba(255, 255, 255, 0.3)" : " rgba(0, 0, 0, 0.1)"};
flex-direction: row;
border-radius:20px;
`
const DropDownBtn = ({ title = "USD" }) => {
    const { themes, currencyData } = useSelector(store => store)
    const { isLoading, currency } = currencyData || {}
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}
    return (
        <HomeBtn isDark={isDarkThemeSelected}>
            <CustomText bold>{title}</CustomText>
            <IonIcon name='chevron-down' style={{ marginLeft: 8 }} size={20} color={isDarkThemeSelected ? colors.ghost_white : colors.black} />
        </HomeBtn>
    )
}

export default DropDownBtn;