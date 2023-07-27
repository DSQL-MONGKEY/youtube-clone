import { Box, Stack } from "@mui/material"
import PropTypes from "prop-types"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

const Videos = ({ videos }) => {
  return (
    <Stack 
    direction='row' 
    flexWrap='wrap'
    justifyContent='start'
    gap={3} >
      {videos.map((video, idx) => (
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
}

export default Videos