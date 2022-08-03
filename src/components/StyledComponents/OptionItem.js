import React from 'react';
import Container from './Container';
import CustomText from './CustomText';
import IonIcon from "react-native-vector-icons/Ionicons"
import styled from 'styled-components';
import { generalSizes } from '../../constants/globalStyles';
import { colors } from '../../constants/colors';
import PropTypes from "prop-types"
import CustomBtn from './CustomBtn';
import { useSelector } from 'react-redux';

const ItemWrapper = styled(Container)`
margin:0px;
justify-content:space-between;
padding: ${generalSizes.sizeLg}px;
border-bottom-width:0.5px;
border-bottom-color:${props => props.isDark ? colors.light_gray : colors.dark};
flex: 0 auto
`
const ItemBtn = styled(CustomBtn)`
justify-content:space-between;
align-items:stretch
`

const OptionItem = ({ title = "", iconName = "ios-settings-outline", onItemPress }) => {
    const { theme } = useSelector(store => store?.themes)
    const { isDarkThemeSelected } = theme || {}
    return (
        <ItemBtn onPress={onItemPress} isDark={isDarkThemeSelected}>
            <ItemWrapper>
                <CustomText size={14}>{title}</CustomText>
                <IonIcon
                    name={iconName} size={20}
                    color={isDarkThemeSelected ? colors.ghost_white : colors.black} />
            </ItemWrapper>
        </ItemBtn>

    )
}

OptionItem.propTypes = {
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string,
    onItemPress: PropTypes.func

}

export default OptionItem;