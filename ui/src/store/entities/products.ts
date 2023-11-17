import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/api/receipt'
import { newHashId } from '@/helpers/id'

type ProductsState = {
  items: Product[]
}

const initialState: ProductsState = {
  items: [],
}

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsUpdated: (
      state: ProductsState,
      action: PayloadAction<Product[]>,
    ) => {
      state.items = action.payload.map((product) => ({
        id: newHashId(),
        ...product,
      }))
    },
    productsAdded: (state: ProductsState, action: PayloadAction<Product[]>) => {
      state.items.push(
        ...action.payload.map((product) => ({ id: newHashId(), ...product })),
      )
    },
    productsRemoved: (
      state: ProductsState,
      action: PayloadAction<string[]>,
    ) => {
      state.items = state.items.filter(
        (product) => product.id && !action.payload.includes(product.id),
      )
    },
  },
})

export const { productsUpdated, productsAdded, productsRemoved } = slice.actions

export default slice.reducer
