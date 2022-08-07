import React, { useState } from 'react';
import { Alert } from 'react-native';
import IonIcon from "react-native-vector-icons/Ionicons"

import { useDispatch, useSelector } from 'react-redux';
import { selectBaseCountry, selectSecondCountry, toggleCurrency } from '../../../../store/currencyReducer/currencyReducer';

import CountryPickerModal from './CountryPickerModal';
import Container from '../../../../components/StyledComponents/Container';
import CustomBtn from '../../../../components/StyledComponents/CustomBtn';

import DropDownBtn from './DropDownBtn';

import { colors } from '../../../../constants/colors';
import { generalSizes } from '../../../../constants/globalStyles';


const DropdownBar = (props) => {
    const { currencyData, themes: { theme } } = useSelector(store => store)
    const { isLoading, currency, baseCurrency,
        secondaryCurrency,
        baseCountries, secondaryCountries
    } = currencyData || {}
    const { isDarkThemeSelected } = theme || {}

    const dispatch = useDispatch()

    const [isModalVisible, setisModalVisible] = useState(false)

    const [isSecondaryModalVisible, setIsSecondaryModalVisible] = useState(false)


    const onToggle = () => dispatch(toggleCurrency())

    const onBaseCurrencyBtnPress = () => setisModalVisible(true)
    const onSecondaryCurrencyBtnPress = () => setIsSecondaryModalVisible(true)

    const onBaseModalDismiss = () => setisModalVisible(false)
    const onSecondaryModalDismiss = () => setIsSecondaryModalVisible(false)



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

        if (isValid) {
            onBaseModalDismiss()
            dispatch(selectBaseCountry({ item }))

        }

    }

    const handleSelectSecondaryCountry = (item) => {
        const isValid = validateSelection(item, baseCurrency, "base currency")

        if (isValid) {
            onSecondaryModalDismiss()
            dispatch(selectSecondCountry({ item }))
        }

    }


    const iconColor = isDarkThemeSelected ? colors.mid_purple : colors.blue

    return (
        <>
            <CountryPickerModal
                onPress={handleSelectBaseCountry}
                countriesData={baseCountries}
                isVisible={isModalVisible} onDismiss={onBaseModalDismiss} />
            <CountryPickerModal
                onPress={handleSelectSecondaryCountry}
                countriesData={secondaryCountries}
                isVisible={isSecondaryModalVisible}
                onDismiss={onSecondaryModalDismiss} />

            <Container mv={10} flex={1} mh={0} jc="space-between" align_items="center">
                <DropDownBtn title={baseCurrency} onPress={onBaseCurrencyBtnPress} />
                <CustomBtn onPress={onToggle}>
                    <IonIcon name='swap-horizontal' size={generalSizes.iconSize_lg} color={iconColor} />
                </CustomBtn>
                <DropDownBtn title={secondaryCurrency} onPress={onSecondaryCurrencyBtnPress} />
            </Container>
        </>

    )
}

export default DropdownBar;