import { useState } from "react"
import { Paper, IconButton } from "@mui/material"

import { SearchRounded } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
const SearchBar = () => {
   const [searchTerm, setSearchTerm] = useState('')
   
   const navigate  = useNavigate()
   const handleSubmit = (e) => {
      e.preventDefault()

      if(searchTerm) {
         navigate(`/search/${searchTerm}`)         
         setSearchTerm('')
      }
   }

   return (
      <Paper
      component='form'
      onSubmit={handleSubmit}
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
         value={searchTerm}
         onChange={(e) => {
            console.log(e.target.value)
            setSearchTerm(e.target.value)}} />
         <IconButton>
            <SearchRounded/>
         </IconButton>
      </Paper>
   )
}

export default SearchBar