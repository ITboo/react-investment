import { createSlice } from "@reduxjs/toolkit";

import { CalculatorT } from "../../types";

const initialState: CalculatorT = {
  income: [],
  fixedExpenses: [],
  inflatingExpenses: [],
  savings: [],
  investment: [],
  remaining: {
    id: "remaining",
    value: 0,
    type: "остаток",
    name: "Remaining",
  },
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {},
});
export const {} = calculatorSlice.actions;

export default calculatorSlice.reducer;
