import { Box, Stack } from "@mui/material"
import PropTypes from "prop-types"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

const Videos = ({ videos, direction }) => {
  return (
    <Stack 
    direction={direction || 'row'} 
    flexWrap='wrap'
    justifyContent='start'
    gap={3} >
      {videos.map((video, idx) => (
        console.log(video.id.videoId),
        <Box key={idx}> 
          {video.id.videoId && <VideoCard video={video}/>}
          {video.snippet.channelId && <ChannelCard channelDetail={video}/>}
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