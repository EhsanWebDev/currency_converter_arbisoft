import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SvgComponent from '../../../../assets/images/SVGs';
import Container from '../../../components/StyledComponents/Container';
import CustomBtn from '../../../components/StyledComponents/CustomBtn';
import CustomInput from '../../../components/StyledComponents/CustomInput';
import CustomText from '../../../components/StyledComponents/CustomText';
import { colors } from '../../../constants/colors';
import { login_user } from '../../../store/userReducer/userSlice';

const LoginBtn = styled(CustomBtn)`
background-color: ${colors.mid_purple};
margin-top:16px;
padding:8px;
border-radius:6px 
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

            <Container flex={8} flex_dir="column">
                <Container mh={0} mv={80} flex_dir="column" align_items="center">
                    <SvgComponent />
                </Container>
                <CustomInput hideInputIcon inputLabel='Username' value="ehsan123" />
                <CustomInput hideInputIcon inputLabel='Password' value="123456" secureTextEntry />
                <LoginBtn onPress={login}>
                    <CustomText>LOGIN</CustomText>
                </LoginBtn>
            </Container>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Login;