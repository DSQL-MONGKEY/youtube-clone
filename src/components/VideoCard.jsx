import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video: {id: videoId, snippet} }) => {
   console.log(snippet)
   return (
      <Card 
         sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}
      >
         <Link to={videoId ? `/video/${videoId}` : 'none' }>
            <CardMedia 
               image={snippet?.thumbnails?.high?.url}
               alt={snippet?.title}
               sx={{ height: '180px', width: '358px'  }}
            />
            <CardContent 
               sx={{ backgroundColor: '#1e1e1e',height: '120px' }}
            >
               <Link to={videoId ? `/channel/${videoId}` : 'none'}>
                  <Typography
                     variant='subtitle1'
                     fontWeight='bold'
                     color='#FFF'
                  >
                     {snippet?.title.slice(0, 30)}
                  </Typography>
               </Link>
               <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : 'none'}>
                  <Typography
                     variant='subtitle2'
                     fontWeight='bold'
                     color='gray'
                  >
                     {snippet?.channelTitle}
                     <CheckCircle
                        sx={{ fontSize: 12, color: 'gray', ml: '5px' }}
                     />
                  </Typography>
               </Link>
            </CardContent>
         </Link>
      </Card>
   )
}

VideoCard.propTypes = {
   video: PropTypes.any,
}

export default VideoCard