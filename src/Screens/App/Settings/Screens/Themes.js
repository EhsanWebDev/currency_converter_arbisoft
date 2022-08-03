import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Container from '../../../../components/StyledComponents/Container';
import CustomBtn from '../../../../components/StyledComponents/CustomBtn';
import CustomText from '../../../../components/StyledComponents/CustomText';
import Header from '../../../../components/StyledComponents/Header';
import { colors } from '../../../../constants/colors';
import { generalSizes } from '../../../../constants/globalStyles';
import { change_theme } from '../../../../store/themeReducer/themeReducer';

const { dark, dark_blue, light_alice_blue, light_purple, red, light_gray, ghost_white } = colors || {}

const TextCenter = styled(CustomText)`
text-align:center;
margin: ${generalSizes.sizeLg}px 0px;
font-size:18px
`

const ThemeItem = styled.View`
background-color:${props => props.bg ?? ghost_white};
width:32px;
height:32px;
border-radius:16px;
border-width:${props => props.selected ? "2px" : "0px"};
border-color:${props => props.selected ? red : light_gray};
margin: 0px 8px
`
const ThemeItemContainer = styled(Container)`
justify-content: center;
flex: 0 auto;
`

const Themes = ({ navigation }) => {
    const { theme } = useSelector(store => store?.themes)
    const { selected_theme, } = theme || {}
    const dispatch = useDispatch()

    const changeTheme = (colorName, isDark) => {
        dispatch(change_theme({ selected_theme: colorName, isDarkThemeSelected: isDark }))
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: selected_theme }]}>
            <Header title='Themes' onBackPress={() => navigation.goBack()} />
            <TextCenter>Choose theme</TextCenter>

            <ThemeItemContainer>
                <CustomBtn onPress={() => changeTheme(dark, true)}>
                    <ThemeItem bg={dark} selected={selected_theme === dark} />
                </CustomBtn>
                <CustomBtn onPress={() => changeTheme(dark_blue, true)}>
                    <ThemeItem bg={dark_blue} selected={selected_theme === dark_blue} />
                </CustomBtn>
                <CustomBtn onPress={() => changeTheme(light_purple, false)}>
                    <ThemeItem bg={light_purple} selected={selected_theme === light_purple} />
                </CustomBtn>
                <CustomBtn onPress={() => changeTheme(light_alice_blue, false)}>
                    <ThemeItem bg={light_alice_blue} selected={selected_theme === light_alice_blue} />
                </CustomBtn>
            </ThemeItemContainer>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Themes;