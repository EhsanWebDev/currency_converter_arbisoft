import React from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import SvgComponent from '../../../../assets/images/SVGs';
import CustomText from '../../../components/StyledComponents/CustomText';
import IonIcon from "react-native-vector-icons/Ionicons"
import Container from '../../../components/StyledComponents/Container';
import CustomInput from '../../../components/StyledComponents/CustomInput';
import { colors } from '../../../constants/colors';
import CustomBtn from '../../../components/StyledComponents/CustomBtn';
import styled from 'styled-components';

const HomeBtn = styled(CustomBtn)`
padding: 14px 30px;
background-color:rgba(255, 255, 255, 0.3);
flex-direction: row;
border-radius:20px;
`

const Home = ({ navigation: { navigate } }) => {
    const { theme } = useSelector(store => store?.themes)
    const { selected_theme, isDarkThemeSelected } = theme || {}
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: selected_theme }]}>
            <StatusBar barStyle={isDarkThemeSelected ? 'light-content' : 'dark-content'} />
            <ScrollView>

                <Container jc="flex-end" flex_dir="column">
                    <Container mh={0} jc="space-between" align_items="center" flex={1}>

                        <CustomText bold>Currency Converter</CustomText>
                        <IonIcon
                            name='ios-settings-outline' size={24}
                            color="white"
                            onPress={() => navigate("Settings")} />
                    </Container>
                    <Container flex_dir="column" mh={0} mv={20}>
                        <Container mh={0} mv={20} jc="center">
                            <SvgComponent />
                        </Container>

                        <Container mv={10} flex={1} mh={0} jc="space-between" align_items="center">
                            <HomeBtn>
                                <CustomText bold>USD</CustomText>
                                <IonIcon name='chevron-down' style={{ marginLeft: 8 }} size={20} color="white" />
                            </HomeBtn>
                            <CustomBtn>
                                <IonIcon name='swap-horizontal' size={24} color={colors.mid_purple} />
                            </CustomBtn>
                            <HomeBtn>
                                <CustomText bold>EURO</CustomText>
                                <IonIcon name='chevron-down' style={{ marginLeft: 8 }} size={20} color="white" />
                            </HomeBtn>

                        </Container>
                        <Container mv={20} flex_dir="column" mh={0} ph={20} pv={16} border_r={20} bg="rgba(255, 255, 255, 0.3)">
                            <CustomText mv={4} size={18}>Amount</CustomText>
                            <CustomInput />
                            <Container mh={0} mv={8}>
                                <CustomText size={14}>100 USD = <CustomText bold size={14}>9.14 EURO</CustomText></CustomText>
                            </Container>

                        </Container>
                    </Container>


                    {/* <Container mh={0} flex_dir="column">
                        <CustomInput />
                        <CustomInput />
                    </Container> */}
                </Container>

            </ScrollView>




        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Home;