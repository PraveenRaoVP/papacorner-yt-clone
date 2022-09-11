import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  // update search each time a key is pressed.
  const [searchElement, setSearchElement] = useState('');

  return (
    <Paper
        component="form"
        onSubmit={()=>{}}
        sx={{ 
            borderRadius: 20,
            border: "1px solid #fff",
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5}
        }}
    >
      <input 
        className="search-bar"
        placeholder="Search.."
        value=""
        onChange={(e)=>{
        }}
        /> 
       <IconButton type="submit" sx={{ p: '10px', color: 'red'}}>
           <SearchIcon />
       </IconButton>
    </Paper>
  )
}

export default SearchBar
