import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList } from "react-native";
import Container from "../../../../components/StyledComponents/Container";
import CustomText from "../../../../components/StyledComponents/CustomText";
import CustomBtn from "../../../../components/StyledComponents/CustomBtn";
// import { countriesData } from "../../../../constants/countriesData";
import { useSelector } from "react-redux";
import { colors } from "../../../../constants/colors";
import { generalSizes } from "../../../../constants/globalStyles";
import styled from "styled-components";
import ModalItem from "./ModalItem";



const ModalView = styled(Container)`
background-color: ${props => props.bg || "transparent"};
border-width:2px;
border-color:${props => props.isDark ? colors.ghost_white : colors.black};
margin-top:20px;
padding:8px 12px;
border-radius:6px
`

const CountryPickerModal = ({ isVisible = false, onDismiss = () => { }, onPress, countriesData = [] }) => {
    const { themes, currencyData } = useSelector(store => store)
    const { isLoading, currency } = currencyData || {}
    const { theme } = themes || {}
    const { selected_theme, isDarkThemeSelected } = theme || {}

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    onDismiss()
                }}
            >
                <Pressable style={styles.centeredView} onPressOut={() => {
                    setModalVisible(false);
                    onDismiss()
                }
                }>
                    <Pressable onPress={() => { }} >
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

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
    },
    modalView: {
        marginHorizontal: generalSizes.sizeLg,
        borderRadius: 8,
        padding: generalSizes.sizeMd,
        maxHeight: 320,
        borderColor: colors.light_gray,
        borderWidth: 2
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default CountryPickerModal;