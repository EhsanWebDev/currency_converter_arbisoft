import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, ScrollView, Animated, Easing, KeyboardAvoidingView, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import SvgComponent from '../../../../assets/images/SVGs';
import CustomText from '../../../components/StyledComponents/CustomText';
import IonIcon from "react-native-vector-icons/Ionicons"
import Container from '../../../components/StyledComponents/Container';
import CustomInput from '../../../components/StyledComponents/CustomInput';
import { colors } from '../../../constants/colors';
import CustomBtn from '../../../components/StyledComponents/CustomBtn';
import styled from 'styled-components';
import { sagaActions } from '../../../Api/Sagas/sagaActions';
import { currencyFetchLoading, currencyFetchSuccess, fetchCurrencyData } from '../../../store/currencyReducer/currencyReducer';
import DropdownBar from './components/DropdownBar';
import CurrencyCard from './components/CurrencyCard';
import { APP_ROUTES } from '../../../navigation/AppRoutes';




const Home = ({ navigation: { navigate } }) => {
    const { themes, currencyData } = useSelector(store => store)
    const { isLoading, currency } = currencyData || {}
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}
    const dispatch = useDispatch()

    const [isFocusing, setIsFocusing] = useState(false)
    const [focusAnimatedValue, setFocusAnimatedValue] = useState(new Animated.Value(0));
    const [blurAnimatedValue, setBlurAnimatedValue] = useState(new Animated.Value(0));


    const focusSpin = focusAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    const blurSpin = blurAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const startFocusAnimation = () => {
        Animated.timing(
            focusAnimatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.ease,
                useNativeDriver: true,

            }
        ).start(() => {
            setFocusAnimatedValue(new Animated.Value(0))
        });
    }
    const startBlurAnimation = () => {
        // Animated.loop(
        Animated.timing(
            blurAnimatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.bounce,
                useNativeDriver: true
            }
        ).start(() => {
            setBlurAnimatedValue(new Animated.Value(0))
        })
        // ).start();
    }

    // useEffect(() => {
    //     dispatch(currencyFetchLoading({
    //         data: 3
    //     }))

    // }, [dispatch])


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: selected_theme }]}>
            <StatusBar barStyle={isDarkThemeSelected ? 'light-content' : 'dark-content'} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}>
                <ScrollView>

                    <Container jc="flex-end" flex_dir="column">
                        <Container mh={0} jc="space-between" align_items="center" flex={1}>
                            <CustomText bold>Currency Converter</CustomText>
                            <IonIcon
                                name='ios-settings-outline' size={24}
                                color={isDarkThemeSelected ? colors.ghost_white : colors.black}
                                onPress={() => navigate(APP_ROUTES.APP_SETTINGS_SCREEN)} />
                        </Container>

                        <Container flex_dir="column" mh={0} mv={20}>
                            <Container mh={0} mv={20} jc="center">
                                <Animated.View style={{ transform: [{ rotate: isFocusing ? focusSpin : blurSpin }] }}>
                                    <SvgComponent />
                                </Animated.View>

                            </Container>
                            <DropdownBar />
                            <CurrencyCard
                                onBlur={() => {
                                    startBlurAnimation();
                                    setIsFocusing(false)
                                }}
                                onFocus={() => {
                                    startFocusAnimation();
                                    setIsFocusing(true)
                                }} />
                        </Container>
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
export default Home;