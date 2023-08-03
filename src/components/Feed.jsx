import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"

import Sidebar from "./Sidebar"
import fetchAPI  from "../utils/fetchAPI"
import Videos from "./Videos"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchAPI(`search?q=${selectedCategory}`)
    .then(data => setVideos(data.items))
  }, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx:'auto', md:'92vh' }, borderRight: '1px solid #3d3d3d', px: { sm: 0, md: 2 } }}>
        <Sidebar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} />
        
        <Typography variant="body2" sx={{ mt:1.5, color: '#fff' }} className="copyright">
          Copyright Dimp.fe 2023
        </Typography>
      </Box>

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
          {selectedCategory} <span 
          style={{ 
            color: 'red'}}>
            Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed