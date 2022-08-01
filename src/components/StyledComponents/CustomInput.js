import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { generalSizes } from '../../constants/globalStyles';
import Container from './Container';
import CustomText from './CustomText';
import IonIcon from "react-native-vector-icons/Ionicons"
import CustomBtn from './CustomBtn';

const { dark, ghost_white, black } = colors || {}

const StyledInput = styled.TextInput.attrs({
    secureTextEntry: false,
    placeholderColor: "#fff",
    selectionColor: "#fff",
    keyboardType: "numeric"

})`
height: 50px;
margin: ${props => props.mv ?? generalSizes.sizeMd}px ${props => props.mh ?? 0}px;
flex:1;
font-size: ${generalSizes.baseFontSize}px ;
padding: 0px 6px;
color:${props => props.color || "white"}
`

const InputText = styled(CustomText)`
  color: ${colors.ghost_white};
//   border-right-color: #fff; 
//   border-right-width: 1px;
  padding:0 8px;

`;

const InputBtn = styled(CustomBtn)`
background-color:  rgba(255, 255, 255, 0.3);
padding:12px;
`

const CustomInput = (props) => {
    const { theme } = useSelector(store => store.themes)
    const { isDarkThemeSelected } = theme || {}
    return (
        <Container mh={0} height={50} border_r={12} jc="space-between" align_items="center"
            bg={isDarkThemeSelected ? " rgba(242, 242, 242, 0.15)" : black} >
            <InputText bold color={colors.purple}>USD</InputText>
            <StyledInput {...props} />
            <InputBtn>
                <IonIcon name='sync' size={24} color="white" onPress={() => { }} />
            </InputBtn>
        </Container>

    )
}

export default CustomInput