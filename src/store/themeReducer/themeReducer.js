import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../../constants/colors"


const INITIAL_STATE = {
    theme: {
        isDarkThemeSelected: false,
        default_text_color: colors.ghost_white,
        default_bg_color: colors.dark,
        selected_theme: colors.dark
    }
}

const theme = createSlice({
    initialState: INITIAL_STATE,
    name: "themes",
    reducers: {
        change_theme: (state, action) => {
            const { payload, } = action || {}
            const { selected_theme, isDarkThemeSelected } = payload || {}
            state.theme = {
                ...state.theme,
                selected_theme,
                isDarkThemeSelected
            }
        }
    }

})

export const themeReducer = theme.reducer

export const { change_theme } = theme.actions