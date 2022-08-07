import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';

import SvgComponent from '../../../assets/images/SVGs';
import Container from '../../components/StyledComponents/Container';
import CustomText from '../../components/StyledComponents/CustomText';

import { APP_ROUTES } from '../../navigation/AppRoutes';


const Splash = ({ navigation }) => {
    const { user: userReducer, themes } = useSelector(store => store)
    const { user } = userReducer || {}
    const { theme } = themes || {}
    const { isDarkThemeSelected } = theme || {}

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (user) {
                navigation.navigate(APP_ROUTES.APP_MAIN_STACK)
                return
            }
            navigation.navigate(APP_ROUTES.AUTH_STACK)
        }, 1500)

        return () => clearTimeout(timeout)
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <Container flex={1} mh={0} mv={20} flex_dir="column" align_items="center" jc="center">
                <SvgComponent isDark={isDarkThemeSelected} />
                <CustomText size={24} bold color="black">Currency Converter</CustomText>
            </Container>
            <Container flex={1} jc="center" align_items="flex-end">
                <CustomText size={12} color="black">Developed by Ehsan Ahmad</CustomText>
            </Container>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1 }
})
export default Splash;