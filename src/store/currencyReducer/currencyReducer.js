import { createSlice } from "@reduxjs/toolkit";
import { countriesData, } from "../../constants/countriesData";

const baseCountriesData = countriesData.map(country => {
    if (country.id === 2) return { ...country, selected: true }
    return country
})
const secondaryCountriesData = countriesData.map(country => {
    if (country.id === 4) return { ...country, selected: true }
    return country
})


const INITIAL_STATE = {
    currencyValues: {},
    isLoading: false,
    error: false,
    baseCurrency: "USD",
    secondaryCurrency: "PKR",
    baseCountries: baseCountriesData,
    secondaryCountries: secondaryCountriesData
}

const currencySlice = createSlice({
    name: "currency",
    initialState: INITIAL_STATE,
    reducers: {
        currencyFetchLoading: (state,) => {
            state.isLoading = true
        },
        currencyFetchSuccess: (state, action) => {
            const { payload } = action || {}
            const { date, result, amount } = payload || {}

            state.isLoading = false;
            state.currencyValues = { date, result, amount }
        },
        currencyFetchFailed: (state, action) => {

            state.isLoading = false
            state.error = action?.error
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
            state.currencyValues = {}

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