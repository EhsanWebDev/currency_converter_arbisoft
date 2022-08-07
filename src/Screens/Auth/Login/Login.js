import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { login_user } from '../../../store/userReducer/userSlice';

import styled from 'styled-components';
import SvgComponent from '../../../../assets/images/SVGs';
import Container from '../../../components/StyledComponents/Container';
import CustomBtn from '../../../components/StyledComponents/CustomBtn';
import CustomInput from '../../../components/StyledComponents/CustomInput';
import CustomText from '../../../components/StyledComponents/CustomText';

import { colors } from '../../../constants/colors';


const LoginBtn = styled(CustomBtn)`
background-color: ${colors.mid_purple};
margin-top:16px;
padding:8px;
border-radius:6px 
color:white
`

const Login = ({ navigation }) => {
    const { themes, user } = useSelector(store => store)
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}
    const dispatch = useDispatch()

    const login = () => {
        dispatch(login_user({ user: { username: "ehsan123", password: "123456" } }))

        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: "App" }],
            });
        }, 500);

    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: selected_theme }]}>
            <StatusBar barStyle={isDarkThemeSelected ? 'light-content' : 'dark-content'} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <Container flex_dir="column" jc="center" flex={1} >
                        <Container mh={0} flex_dir="column" mv={80} align_items="center">
                            <SvgComponent isDark={isDarkThemeSelected} />
                        </Container>
                        <CustomInput keyboardType="default" hideInputIcon inputLabel='Username' value="ehsan123" />
                        <CustomInput keyboardType="default" hideInputIcon inputLabel='Password' value="123456" secureTextEntry />
                        <LoginBtn onPress={login}>
                            <CustomText color="white">LOGIN</CustomText>
                        </LoginBtn>
                    </Container>
                </ScrollView>

            </KeyboardAvoidingView>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Login;