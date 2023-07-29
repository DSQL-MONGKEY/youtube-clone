import { useState, useEffect } from "react"
import { Box,  Typography } from "@mui/material"

import fetchAPI  from "../utils/fetchAPI"
import Videos from "./Videos"
import { useParams } from "react-router-dom"

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?q=${searchTerm}`)
    .then(data => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box 
      p={2} 
      sx={{ 
        overflowY: 'auto', 
        height: '90hv', 
        flex: 2}}>
        <Typography 
          variant="h4" 
          fontWeight='bold' 
          mb={2} 
          sx={{ color: 'white' }}>
          Search result for: &nbsp;
          <span 
            style={{ 
              color: '#F31503'}}>
              { searchTerm }
          </span> Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
  )
}

export default SearchFeed