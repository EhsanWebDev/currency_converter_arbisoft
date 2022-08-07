import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from "styled-components/native";

import { colors } from '../../constants/colors';
import { app_fonts } from "../../constants/constants";
import { generalSizes } from "../../constants/globalStyles"


const { dark, ghost_white, black } = colors || {}

const StyledText = styled.Text`
font-size:${props => `${props.size ?? generalSizes.baseFontSize}px`};
font-family:${props => props.bold ? app_fonts.Roboto_Bold : app_fonts.Roboto};
color: ${props => props.color};
margin: ${props => props.mv ?? 0}px ${props => props.mh ?? 0}px;
text-align: ${props => props.textCenter ? "center" : "left"}
`



const CustomText = (props) => {

    const { theme } = useSelector(store => store.themes)
    const { isDarkThemeSelected } = theme || {}

    const textColor = isDarkThemeSelected ? ghost_white : black

    return (
        <StyledText color={textColor} {...props}>
            {props.children}
        </StyledText>
    )
}

CustomText.propTypes = {
    size: PropTypes.number,
    bold: PropTypes.bool,
    textCenter: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired,
}

export default CustomText