import { createSlice } from "@reduxjs/toolkit";
import { countriesData } from "../../constants/countriesData";


const INITIAL_STATE = {
    currency: [],
    isLoading: false,
    baseCurrency: "USD",
    secondaryCurrency: "EUR",
    baseCountries: [...countriesData],
    secondaryCountries: [...countriesData]
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

            let tempBaseData = state.baseCountries
            let tempSecondaryData = state.secondaryCountries


            state.baseCurrency = tempSecondary
            state.secondaryCurrency = tempBase
            state.baseCountries = tempSecondaryData
            state.secondaryCountries = tempBaseData

        },
        selectBaseCountry: (state, action) => {
            const { item } = action.payload || {}
            const { id, identifier } = item || {}
            state.baseCurrency = identifier
            state.baseCountries = state.baseCountries.map(country => {
                if (country?.id === id) {
                    return {
                        ...country,
                        selected: true
                    }
                }
                return { ...country, selected: false }
            })
        },
        selectSecondCountry: (state, action) => {
            const { item } = action.payload || {}
            const { id, identifier } = item || {}
            state.secondaryCurrency = identifier
            state.secondaryCountries = state.secondaryCountries.map(country => {
                if (country?.id === id) {
                    return {
                        ...country,
                        selected: true
                    }
                }
                return { ...country, selected: false }
            })
        },
    }
});

export const { currencyFetchLoading, currencyFetchSuccess, currencyFetchFailed, toggleCurrency, selectSecondCountry, selectBaseCountry } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer