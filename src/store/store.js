import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeReducer/themeReducer"

const store = configureStore({
    reducer: {
        themes: themeReducer
    }
})

export default store