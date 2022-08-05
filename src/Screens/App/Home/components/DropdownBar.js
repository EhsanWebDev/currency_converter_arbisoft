import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../../components/StyledComponents/Container';
import IonIcon from "react-native-vector-icons/Ionicons"
import { colors } from '../../../../constants/colors';
import CustomBtn from '../../../../components/StyledComponents/CustomBtn';
import CountryPickerModal from './CountryPickerModal';
import DropDownBtn from './DropDownBtn';
import { selectBaseCountry, selectSecondCountry, toggleCurrency } from '../../../../store/currencyReducer/currencyReducer';
import { Alert } from 'react-native';


const DropdownBar = (props) => {
    const { themes, currencyData } = useSelector(store => store)
    const { isLoading, currency, baseCurrency, secondaryCurrency, baseCountries, secondaryCountries } = currencyData || {}
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}
    const dispatch = useDispatch()

    const [isModalVisible, setisModalVisible] = useState(false)

    const [isSecondaryModalVisible, setIsSecondaryModalVisible] = useState(false)


    const validateSelection = (item, currencyType, As) => {
        const { identifier } = item || {}

        if (identifier === currencyType) {
            Alert.alert(`${currencyType} already selected as ${As}.`)

            return false
        }

        return true
    }

    const handleSelectBaseCountry = (item) => {
        const isValid = validateSelection(item, secondaryCurrency, "secondary currency")

        if (isValid)
            dispatch(selectBaseCountry({ item }))
    }

    const handleSelectSecondaryCountry = (item) => {
        const isValid = validateSelection(item, baseCurrency, "base currency")

        if (isValid)
            dispatch(selectSecondCountry({ item }))
    }


    return (
        <>
            <CountryPickerModal
                onPress={handleSelectBaseCountry}
                countriesData={baseCountries}
                isVisible={isModalVisible} onDismiss={() => setisModalVisible(false)} />
            <CountryPickerModal
                onPress={handleSelectSecondaryCountry}
                countriesData={secondaryCountries}
                isVisible={isSecondaryModalVisible}
                onDismiss={() => setIsSecondaryModalVisible(false)} />
            <Container mv={10} flex={1} mh={0} jc="space-between" align_items="center">
                <DropDownBtn title={baseCurrency} onPress={() => setisModalVisible(true)} />
                <CustomBtn onPress={() => dispatch(toggleCurrency())}>
                    <IonIcon name='swap-horizontal' size={24} color={colors.mid_purple} />
                </CustomBtn>
                <DropDownBtn title={secondaryCurrency} onPress={() => setIsSecondaryModalVisible(true)} />
            </Container>
        </>

    )
}

export default DropdownBar;