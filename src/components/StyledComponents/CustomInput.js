import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from "prop-types"
import { useSelector } from 'react-redux';
import IonIcon from "react-native-vector-icons/Ionicons"
import styled from 'styled-components/native';

import Container from './Container';
import CustomText from './CustomText';
import CustomBtn from './CustomBtn';

import { colors } from '../../constants/colors';
import { generalSizes } from '../../constants/globalStyles';

const { light_gray_less_opacity, ghost_white, black, dark_gray_op, gray, light_gray } = colors || {}


const StyledInput = styled.TextInput.attrs(props => ({
    selectionColor: props.isDark ? ghost_white : black,
    keyboardType: props.keyboardType
}))`
height: ${generalSizes.inputHeight}px;
margin: ${props => props.mv ?? generalSizes.sizeMd}px ${props => props.mh ?? 0}px;
flex:1;
font-size: ${generalSizes.baseFontSize}px ;
padding: 0px 6px;
color:${props => props.isDark ? ghost_white : black};
background-color:${light_gray_less_opacity}
`

const InputText = styled(CustomText)`
  padding:0 16px;
`;

const InputBtn = styled(CustomBtn)`
background-color: ${light_gray};
padding:12px;
`

const CustomInput = (props) => {
    const { hideInputIcon, inputLabel, boldLabel, onIconPress, iconName = "sync" } = props || {}

    const { themes, currencyData } = useSelector(store => store)

    const { isLoading, } = currencyData || {}
    const { theme } = themes || {}
    const { isDarkThemeSelected } = theme || {}

    const iconColor = isDarkThemeSelected ? ghost_white : black
    const containerBg = isDarkThemeSelected ? dark_gray_op : gray

    return (
        <Container
            mh={0}
            height={generalSizes.inputHeight}
            border_r={12}
            jc="space-between" align_items="center"
            bg={containerBg} >

            <InputText bold={boldLabel} size={14}>{inputLabel}</InputText>
            <StyledInput isDark={isDarkThemeSelected} {...props} />

            {!hideInputIcon &&
                <InputBtn onPress={onIconPress}>
                    {isLoading ?
                        <ActivityIndicator color={iconColor} /> :
                        <IonIcon name={iconName} size={generalSizes.iconSize_med} color={iconColor} />
                    }
                </InputBtn>
            }

        </Container>

    )
}

CustomInput.propTypes = {
    hideInputIcon: PropTypes.bool,
    inputLabel: PropTypes.string.isRequired,
    boldLabel: PropTypes.bool,
    iconName: PropTypes.string,
    onIconPress: PropTypes.func
}

export default CustomInput