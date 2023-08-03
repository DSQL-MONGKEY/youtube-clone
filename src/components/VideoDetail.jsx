import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Stack, Typography, Box } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import Videos from "./Videos"
import fetchAPI from "../utils/fetchAPI"
import VideoDetailSkeleton from "../skeletons/VideoDetailSkeleton"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([])
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?id=${id}`)
    .then(data =>   setVideoDetail(data.items[1]))

    fetchAPI(`search?relatedToVideoId=${id}&maxResults=5`)
    .then(data => setVideos(data.items))
  }, [id])
  console.log(videoDetail)

  if(!videoDetail?.snippet) return <VideoDetailSkeleton/>

  const { 
    snippet: { title, channelTitle }, 
    statistics: { viewCount, likeCount  } 
  } = videoDetail

  return (
    <Box flex={2} flexDirection={'column'}>
      <Stack direction={{ xs: 'column', md: 'row' }} p={2}>
        <Box flex={1}>
          <Box 
          sx={{ width: { xs: '100%'}, 
          position: 'sticky', 
          top: '86px',
          }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            width={'auto'} height={'500px'} controls/>
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
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent={`center`} alignItems={`center`}>
          <Videos videos={videos} direction={'column'} />
        </Box>
      </Stack>
    </Box>
  )
}

/*
Komponen ini bertugas untuk memutar dan menampilkan seputar detail video dengan cara mendapatkan {id} dari parameter url dan lalu mengirimkan nya pada url API
*/

export default VideoDetail