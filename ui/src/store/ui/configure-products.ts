import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ConfigureProductsState = {
  open: boolean
  isPristine: boolean
}

const initialState: ConfigureProductsState = {
  open: false,
  isPristine: true,
}

const slice = createSlice({
  name: 'configure-products',
  initialState,
  reducers: {
    configureProductsDidOpen: (state: ConfigureProductsState) => {
      state.open = true
    },
    configureProductsDidClose: (state: ConfigureProductsState) => {
      state.open = false
    },
    configureProductsIsPristineChanged: (
      state: ConfigureProductsState,
      action: PayloadAction<boolean>,
    ) => {
      state.isPristine = action.payload
    },
  },
})

export const {
  configureProductsDidOpen,
  configureProductsDidClose,
  configureProductsIsPristineChanged,
} = slice.actions

export default slice.reducer
