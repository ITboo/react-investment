import { useAppSelector } from './redux/hooks'

import CategoryColumn from './components/CategoryColumn'
import Entry from './components/Entry'

import { CATEGORIES } from './types'

import { Container, Grid2, Typography } from '@mui/material'
import './App.css'

function App() {
  const entry = useAppSelector((store) => store.calculator.remaining)
  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2>
          <h2>Графики</h2>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2}>
        {CATEGORIES.map((category) => (
          <Grid2 key={category} size={4}>
            <CategoryColumn category={category} />
          </Grid2>
        ))}
        <Grid2 key="category remaining">
          <Typography>Remaining</Typography>
          <Entry entry={entry} />
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default App
