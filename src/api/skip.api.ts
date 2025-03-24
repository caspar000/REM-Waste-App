import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { DOMAIN } from '@/app/appRoutePath'
import { ISkip } from '@/store/features/skipSlice'

interface ILocation {
  postcode: string
  area: string
}

export const fetchSkipDataFromAPI = createAsyncThunk<ISkip[], ILocation>(
  'skip/fetchSkipData',
  async ({ postcode, area }, thunkAPI) => {
    const response = await axios.get(
      `${DOMAIN}/api/skips/by-location?postcode=${postcode}&area=${area}`
    )

    console.log('skip response', response.data)

    const skip: ISkip[] = response.data

    return skip
  }
)
