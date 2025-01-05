import { Grid2, Typography } from '@mui/material'
import { CategoryT } from '../../types'
import { useAppSelector } from '../../redux/hooks'
import Entry from '../Entry'

type CategoryColumnProps = {
  category: CategoryT
}
const CategoryColumn = ({ category }: CategoryColumnProps) => {
  const entries = useAppSelector((store) => store.calculator[category])
  return (
    <Grid2 container>
      <Grid2 key={`category ${category}`}>
        <Typography>{category}</Typography>
      </Grid2>

      {entries.map((entry) => (
        <Grid2 key={entry.id}>
          <Entry entry={entry} />
        </Grid2>
      ))}
      <Grid2 key={`add ${category}`}>+</Grid2>
    </Grid2>
  )
}

export default CategoryColumn
