import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import fetchAPI from "../utils/fetchAPI"
import VideoBuffer from "./skeletons/VideoBuffer"
import ChannelCard from "./ChannelCard"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [channelVideos, setChannelVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`channels?id=${id}`)
    .then(data => setChannelDetail(data.items[0]))

    fetchAPI(`search?id=${id}`)
    .then(data => setChannelVideos(data.items))
  },[id])
  
  console.log(channelDetail)
  if(!channelDetail?.snippet) return <VideoBuffer/>

  const { 
    brandingSettings,
    snippet,
    statistics
    
  } = channelDetail

  return (
    <Box minHeight={'95hv'}>
      <div
        style={{ 
          background: 'linear-gradient(315deg, rgba(18,35,145,1) 17%, rgba(24,43,170,1) 24%, rgba(73,89,201,1) 60%, rgba(0,212,255,1) 94%)',
          height: '300px'
        }}
      />
      <ChannelCard channelDetail={channelDetail} />
    </Box>
  )
}

export default ChannelDetail