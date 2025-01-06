import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { transliterate as tr } from 'transliteration'

import {
  CATEGORIES,
  CalculatorT,
  EntryT,
  keyIsArrayCategory,
} from '../../types'
import { initCalculator } from '../../utils/initCalculator'

const initialState: CalculatorT = {
  income: [],
  fixedExpenses: [],
  inflatingExpenses: [],
  savings: [],
  investment: [],
  remaining: {
    id: 'remaining',
    value: 0,
    type: 'остаток',
    name: 'Remaining',
  },
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initCalculator,
  reducers: {
    addEntry: (
      state,
      action: PayloadAction<{ category: string; type: string }>,
    ) => {
      const { category, type } = action.payload
      if (!keyIsArrayCategory(category)) return
      state[category].push({
        id: uuidv4(),
        value: 0,
        type,
        name: tr(type),
      })
    },
    deleteEntry: (state, action: PayloadAction<EntryT['id']>) => {
      for (const category of CATEGORIES) {
        const targetIndex = state[category].findIndex(
          (entry) => entry.id === action.payload,
        )
        if (targetIndex !== -1) {
          state[category].splice(targetIndex, 1)
          return
        }
      }
    },
    changeEntryValue: (state, action: PayloadAction<EntryT>) => {
      const { id, value } = action.payload
      for (const category of CATEGORIES) {
        const targetEntry = state[category].find((entry) => entry.id === id)
        if (targetEntry) {
          targetEntry.value = value
          return
        }
      }
    },
  },
})
export const { addEntry, deleteEntry, changeEntryValue } =
  calculatorSlice.actions

export default calculatorSlice.reducer
