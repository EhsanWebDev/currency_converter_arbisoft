import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    currency: [],
    isLoading: false,
    baseCurrency: "USD",
    secondaryCurrency: "EUR"
}

const currencySlice = createSlice({
    name: "currency",
    initialState: INITIAL_STATE,
    reducers: {
        currencyFetchLoading: (state,) => {
            state.isLoading = true
        },
        currencyFetchSuccess: (state, action) => {
            state.isLoading = false;
            console.log({ action, })
        },
        currencyFetchFailed: (state) => {
            state.isLoading = false
        },

        toggleCurrency: (state) => {
            let tempBase = state.baseCurrency
            let tempSecondary = state.secondaryCurrency

            state.baseCurrency = tempSecondary
            state.secondaryCurrency = tempBase
        }
    }
});

export const { currencyFetchLoading, currencyFetchSuccess, currencyFetchFailed, toggleCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer