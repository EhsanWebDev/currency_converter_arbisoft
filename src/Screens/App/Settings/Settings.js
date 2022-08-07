import React from 'react';
import { StyleSheet, SafeAreaView, Linking, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/userReducer/userSlice';

import Header from '../../../components/StyledComponents/Header';
import OptionItem from '../../../components/StyledComponents/OptionItem';

import { FIXER_URL } from '../../../constants/constants';
import { APP_ROUTES } from '../../../navigation/AppRoutes';




const Settings = ({ navigation }) => {
    const { theme } = useSelector(store => store?.themes)
    const { selected_theme, } = theme || {}
    const dispatch = useDispatch()

    const logout_user = () => {
        dispatch(logout())
        navigation.replace(APP_ROUTES.AUTH_STACK)
    }

    const handleExternalLinkPress = async () => {
        try {
            await Linking.canOpenURL(FIXER_URL);
            await Linking.openURL(FIXER_URL);
        } catch (error) {
            Alert.alert(`Unsupported URL: ${FIXER_URL}`);
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: selected_theme }]}>
            <Header title='Settings' onBackPress={() => navigation.goBack()} />
            <OptionItem title='Themes' iconName='ios-contrast-outline' onItemPress={() => navigation.navigate(APP_ROUTES.APP_THEMES_SCREEN)} />
            <OptionItem title='Fixer.io' iconName='link-outline' onItemPress={handleExternalLinkPress} />
            <OptionItem title='Logout' iconName='log-out-outline' onItemPress={logout_user} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Settings;