import React, { useMemo } from 'react';
import types from "prop-types"
import IonIcon from "react-native-vector-icons/Ionicons"

import { useSelector } from 'react-redux';

import styled from 'styled-components';
import CustomBtn from '../../../../components/StyledComponents/CustomBtn';
import CustomText from '../../../../components/StyledComponents/CustomText';

import { colors } from '../../../../constants/colors';


const HomeBtn = styled(CustomBtn)`
padding: 14px 32px;
background-color:${props => props.isDark ? colors.light_gray : colors.dark_gray};
flex-direction: row;
border-radius:20px;
`
const DropDownBtn = ({ title = "", onPress, ...rest }) => {
    const { themes, currencyData } = useSelector(store => store)
    const { theme } = themes || {}
    const { isDarkThemeSelected } = theme || {}

    const iconColor =
        useMemo(() => isDarkThemeSelected ? colors.ghost_white : colors.black,
            [isDarkThemeSelected])

    return (
        <HomeBtn {...rest} isDark={isDarkThemeSelected} onPress={onPress}>
            <CustomText size={14} bold>{title}</CustomText>
            <IonIcon name='chevron-down' style={{ marginLeft: 8 }} size={20} color={iconColor} />
        </HomeBtn>
    )
}

DropDownBtn.propTypes = {
    title: types.string.isRequired,
    onPress: types.func
}

export default DropDownBtn;