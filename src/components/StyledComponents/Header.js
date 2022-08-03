import React from 'react';
import Container from './Container';
import IonIcons from "react-native-vector-icons/Ionicons"
import CustomText from './CustomText';
import styled from 'styled-components';
import { generalSizes } from '../../constants/globalStyles';
import CustomBtn from './CustomBtn';
import { colors } from '../../constants/colors';
import PropTypes from "prop-types"
import { useSelector } from 'react-redux';

const HeaderWrapper = styled.View`
flex-direction:row;
align-items:center;
justify-content: space-between;
padding: ${generalSizes.sizeLg}px ${generalSizes.sizeLg}px;
border-bottom-width:0.5px;
border-bottom-color:${props => props.isDark ? colors.light_gray : colors.dark};
`
const HeaderButton = styled(CustomBtn)`
`
const HeaderText = styled(CustomText)`
flex:1;
text-align: center;
margin-right:20px;
`

const Header = ({ title = "", onBackPress = () => { } }) => {
    const { theme } = useSelector(store => store?.themes)
    const { isDarkThemeSelected } = theme || {}
    return (
        <HeaderWrapper isDark={isDarkThemeSelected}>
            <HeaderButton onPress={onBackPress}>
                <IonIcons name='chevron-back' size={20}
                    color={isDarkThemeSelected ? colors.ghost_white : colors.black}

                />
            </HeaderButton>
            <HeaderText>{title}</HeaderText>
        </HeaderWrapper>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBackPress: PropTypes.func
}

export default Header;