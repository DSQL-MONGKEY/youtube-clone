import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Stack, Typography, Box } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import Videos from "./Videos"
import fetchAPI from "../utils/fetchAPI"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?id=7ghhRHRP6t4`)
    .then(data => {
      setVideoDetail(data.items)
    })
  }, [id])
  console.log(videoDetail)

  // if(!videoDetail?.snippet) return <Typography sx={{ color: '#fff', fontSize: '20px' }}>LOADING</Typography>

  // const { snippet: { title, channelId, channelTitle }, viewCount, likeCount } = videoDetail

  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=7ghhRHRP6t4`} 
            width='1/2'
            controls/>
            <Typography>
              {/* {title} */}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '$fff' }} py='1px' px='2px'>
              <Link to={`/channel`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} sx={{ color: '#fff' }}>
                  {/* {channelTitle} */}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction={`row`} gap={`20px`} alignItems={`center`}>
                <Typography variant={`body1`} sx={{ opacity: 0.7 }}>
                  {/* {parseInt(viewCount).toLocaleString()} | Views */}
                </Typography>
                <Typography variant={`body1`} sx={{ opacity: 0.7 }}>
                  {/* {parseInt(likeCount).toLocaleString()} | Likes */}
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