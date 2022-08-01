import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../../constants/colors"


const INITIAL_STATE = {
    theme: {
        isDarkThemeSelected: true,
        default_text_color: colors.ghost_white,
        default_bg_color: colors.dark,
        selected_theme: colors.dark
    }
}

const theme = createSlice({
    initialState: INITIAL_STATE,
    name: "themes",

})

export const themeReducer = theme.reducer