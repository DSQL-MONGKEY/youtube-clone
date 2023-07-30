import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Stack, Typography, Box } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import Videos from "./Videos"
import fetchAPI from "../utils/fetchAPI"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const id = 'S4_O3R4E06A'

  useEffect(() => {
    fetchAPI(`videos?id=${id}`)
    .then(data => {
      setVideoDetail(data.items[0])
    })
  }, [id])
  console.log(videoDetail)

  // if(!videoDetail?.snippet) return <Typography sx={{ color: '#fff', fontSize: '20px' }}>LOADING</Typography>

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            width='1/2'
            controls/>
            <Typography sx={{ fontSize: '20px', color: '#fff' }}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '$fff' }} py='1px' px='2px'>
              <Link to={`/channel`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} sx={{ color: '#fff' }}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction={`row`} gap={`20px`} alignItems={`center`} sx={{ color: '#fff' }}>
                <Typography variant={`body1`} sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount)} | Views
                </Typography>
                <Typography variant={`body1`} sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount)} | Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

/*
Komponen ini bertugas untuk memutar dan menampilkan seputar detail video dengan cara mendapatkan {id} dari parameter url dan lalu mengirimkan nya pada url API
*/

export default VideoDetail