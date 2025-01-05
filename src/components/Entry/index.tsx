import { InputLabel, Input, InputAdornment } from '@mui/material'
import { useAppDispatch } from '../../redux/hooks'
import { EntryT } from '../../types'
import ClearIcon from '@mui/icons-material/Clear'
import { changeEntryValue } from '../../redux/slices/CalculatorSlice'

type EntryProps = {
  entry: EntryT
}

const Entry = ({ entry }: EntryProps) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <InputLabel htmlFor="input-with-icon-adornment">{entry.type}</InputLabel>
      <Input
        id="input-with-icon-adornment"
        value={entry.value}
        name={entry.name}
        onChange={(e) => {
          const newValue = Number(e.target.value)
          if (Number.isNaN(newValue)) return
          dispatch(changeEntryValue({ ...entry, value: newValue }))
        }}
        endAdornment={
          <InputAdornment position="end">
            <ClearIcon />
          </InputAdornment>
        }
      />
    </>
  )
}

export default Entry
