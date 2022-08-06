import React from "react";
import { Modal, Pressable, View, FlatList } from "react-native";
import Container from "../../../../components/StyledComponents/Container";

import { useSelector } from "react-redux";
import { colors } from "../../../../constants/colors";
import styled from "styled-components";
import ModalItem from "./ModalItem";
import types from "prop-types"
import { styles } from "./modalStyles";


const ModalView = styled(Container)`
background-color: ${props => props.bg || "transparent"};
border-width:2px;
border-color:${props => props.isDark ? colors.ghost_white : colors.black};
margin-top:20px;
padding:8px 12px;
border-radius:6px
`

const CountryPickerModal = ({ isVisible = false, onDismiss = () => { }, onPress, countriesData = [] }) => {
    const { themes, } = useSelector(store => store)
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => onDismiss()}
            >
                <Pressable style={styles.centeredView} onPressOut={() => onDismiss()}>
                    <Pressable>
                        <ModalView isDark={isDarkThemeSelected} bg={selected_theme}>
                            <FlatList
                                data={countriesData}
                                renderItem={(props) => <ModalItem onPress={onPress} isDark={isDarkThemeSelected} {...props} />}
                                keyExtractor={(item) => item?.id.toString()}
                            />
                        </ModalView>
                    </Pressable>
                </Pressable>

            </Modal>
        </View>
    );
};


CountryPickerModal.propTypes = {
    isVisible: types.bool,
    countriesData: types.array,
    onDismiss: types.func,
    onPress: types.func,
}

export default CountryPickerModal;