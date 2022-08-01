import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { colors } from '../../constants/colors';
import { app_fonts } from "../../constants/constants";
import { generalSizes } from "../../constants/globalStyles"
import PropTypes from 'prop-types';

const { dark, ghost_white, black } = colors || {}

const StyledText = styled.Text`
font-size:${props => `${props.size ?? generalSizes.baseFontSize}px`};
font-family:${props => props.bold ? app_fonts.Roboto_Bold : app_fonts.Roboto};
color: ${props => props.color};
margin: ${props => props.mv ?? 0}px ${props => props.mh ?? 0}px;
`



const CustomText = (props) => {
    const { theme } = useSelector(store => store.themes)
    const { isDarkThemeSelected } = theme || {}

    return (
        <StyledText color={isDarkThemeSelected ? ghost_white : black} {...props}>
            {props.children}
        </StyledText>
    )
}

CustomText.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired,
    size: PropTypes.number,
    bold: PropTypes.bool
}

export default CustomText