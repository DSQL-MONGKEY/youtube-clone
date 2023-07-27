import { useState } from "react"
import { Paper, IconButton } from "@mui/material"

import { SearchRounded } from "@mui/icons-material"
const SearchBar = () => {
   const [search, setSearch] = useState('')
   return (
      <Paper
      component='form'
      onSubmit={() => {}}
      sx={{ 
         borderRadius: 20,
         border: '1px solid #e3e3e3',
         pl: 2,
         mr: { sm: 5},
         boxShadow: 'none' 
      }}
      >
         <input 
         className="search-bar"
         placeholder="Do u search something?"
         value={search}
         onChange={(e) => {
            console.log(e.target.value)
            setSearch(e.target.value)}} />
         <IconButton>
            <SearchRounded/>
         </IconButton>
      </Paper>
   )
}

export default SearchBar