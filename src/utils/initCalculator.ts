import { v4 as uuidv4 } from 'uuid'
import { CalculatorT } from '../types'

const income = [
  {
    id: uuidv4(),
    name: 'salary',
    value: 120000,
    type: 'salary',
  },
  {
    id: uuidv4(),
    name: 'freelance',
    value: 20000,
    type: 'freelance',
  },
]
const fixedExpenses = [
  {
    id: uuidv4(),
    name: 'zala',
    value: 3000,
    type: 'zala',
  },
  {
    id: uuidv4(),
    name: 'netflix',
    value: 1500,
    type: 'netflix',
  },
]
const inflatingExpenses = [
  {
    id: uuidv4(),
    name: 'food',
    value: 30000,
    type: 'food',
  },
]
const savings = [
  {
    id: uuidv4(),
    name: 'bank',
    value: 300000,
    type: 'bank',
  }
]
const investment = [
  {
    id: uuidv4(),
    name: 'investment',
    value: 3000,
    type: 'investment',
  }
]

export const initCalculator: CalculatorT ={
    income, fixedExpenses, inflatingExpenses,savings, investment, remaining: {
        id: uuidv4(),
        value: 120000+20000-3000-1500-30000+300000-3000,
        type: 'remaining',
        name: 'remainin'
    }
}