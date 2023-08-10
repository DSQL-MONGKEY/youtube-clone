import { Box, Stack } from "@mui/material"
import PropTypes from "prop-types"
import VideoCard from "./VideoCard"

const Videos = ({ videos, direction }) => {
  return (
    <Stack 
    direction={direction || 'row'} 
    flexWrap='wrap'
    justifyContent={{ xs: 'center', md: 'start' }}
    gap={2} >
      {videos.map((video, idx) => (
        <Box key={idx}> 
          {video.id.videoId && <VideoCard video={video}/>}
        </Box>
      ))}
    </Stack>
  )
}

Videos.propTypes = {
  videos: PropTypes.any,
  direction: PropTypes.string
}

/* 
<Parent: Feed.jsx & SearchFeed.jsx>
Komponen ini berfungsi untuk menampilkan video yang dipanggil melalui komponen Feed. Data yang berasal dari state pada komponen feed di pass-to-property ke komponen ini lalu di map untuk mengambil isi nya dan kirim ke 2 komponen yaitu VideoCard dan ChannelDetail  
*/

export default Videos