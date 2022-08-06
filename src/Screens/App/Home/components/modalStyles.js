import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";
import { generalSizes } from "../../../../constants/globalStyles";


export const styles = StyleSheet.create({
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