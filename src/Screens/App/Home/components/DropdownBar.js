import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../../components/StyledComponents/Container';
import IonIcon from "react-native-vector-icons/Ionicons"
import { colors } from '../../../../constants/colors';
import CustomBtn from '../../../../components/StyledComponents/CustomBtn';
import CountryPickerModal from './CountryPickerModal';
import DropDownBtn from './DropDownBtn';
import { toggleCurrency } from '../../../../store/currencyReducer/currencyReducer';


const DropdownBar = (props) => {
    const { themes, currencyData } = useSelector(store => store)
    const { isLoading, currency, baseCurrency, secondaryCurrency } = currencyData || {}
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}
    const dispatch = useDispatch()

    const [isModalVisible, setisModalVisible] = useState(false)

    return (
        <>
            <CountryPickerModal isVisible={isModalVisible} onDismiss={() => setisModalVisible(false)} />
            <Container mv={10} flex={1} mh={0} jc="space-between" align_items="center">
                <DropDownBtn title={baseCurrency} />
                <CustomBtn onPress={() => dispatch(toggleCurrency())}>
                    <IonIcon name='swap-horizontal' size={24} color={colors.mid_purple} />
                </CustomBtn>
                <DropDownBtn title={secondaryCurrency} />
            </Container>
        </>

    )
}

export default DropdownBar;