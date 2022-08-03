import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import Header from '../../../components/StyledComponents/Header';
import OptionItem from '../../../components/StyledComponents/OptionItem';


const Settings = ({ navigation }) => {
    const { theme } = useSelector(store => store?.themes)
    const { selected_theme, } = theme || {}

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: selected_theme }]}>
            <Header title='Settings' onBackPress={() => navigation.goBack()} />
            <OptionItem title='Themes' iconName='ios-contrast-outline' onItemPress={() => navigation.navigate("Themes")} />
            <OptionItem title='Fixer.io' iconName='link-outline' />
            <OptionItem title='Logout' iconName='log-out-outline' />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Settings;