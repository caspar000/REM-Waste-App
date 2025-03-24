import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchSkipDataFromAPI } from '@/api/skip.api'

export interface ISkip {
  id: number
  size: number
  hire_period_days: number
  transport_cost: number | null
  per_tonne_cost: number | null
  price_before_vat: number
  vat: number
  postcode: string
  area: string | null
  forbidden: boolean
  created_at: string
  updated_at: string
  allowed_on_road: boolean
  allows_heavy_waste: boolean
}

const initialState: ISkip[] = []

export const skipSlice = createSlice({
  name: 'skip',
  initialState,
  reducers: {
    setSkip: (state, action: PayloadAction<ISkip[]>) => {
      return action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSkipDataFromAPI.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { setSkip } = skipSlice.actions

export default skipSlice.reducer
