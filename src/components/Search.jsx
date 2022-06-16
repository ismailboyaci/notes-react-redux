import { TextField } from '@mui/material'
import { useDispatch } from "react-redux";
import { searchNote } from '../redux/reducer/noteReducer';



function Search() {

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(searchNote(e.target.value.toLowerCase()))
  }
  

  

  return (
    <div>
        <TextField fullWidth  id="standard-basic" label="Find Notes" variant="standard" onChange={handleChange}/>
    </div>
  )
}

export default Search