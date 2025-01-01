export type EntryT = {
  id: string;
  value: number;
  type: string;
  name: string;
};

export const CATEGORIES = [
  "income",
  "fixedExpenses",
  "inflatingExpenses",
  "savings",
  "investment",
] as const;

export type CategoryT = (typeof CATEGORIES)[number];

export type CalculatorT = {
  income: EntryT[];
  fixedExpenses: EntryT[];
  inflatingExpenses: EntryT[];
  savings: EntryT[];
  investment: EntryT[];
  remaining: EntryT;
};

export function keyIsArrayCategory(key:string): key is CategoryT{
return CATEGORIES.includes(key as CategoryT)
}
