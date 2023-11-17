import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Receipt } from '@/api/receipt'

type ReceiptState = {
  value?: Receipt
}

const initialState: ReceiptState = {}

const slice = createSlice({
  name: 'receipt',
  initialState,
  reducers: {
    receiptUpdated: (state: ReceiptState, action: PayloadAction<Receipt>) => {
      state.value = action.payload
    },
    receiptRemoved: (state: ReceiptState) => {
      state.value = undefined
    },
  },
})

export const { receiptUpdated, receiptRemoved } = slice.actions

export default slice.reducer
