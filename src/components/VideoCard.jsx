import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Skeleton } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
   console.log(snippet)
   return (
      <Card 
         sx={{ width: { md: '350px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
         <Link to={videoId ? `/video/${videoId}` : 'none' }>
            {snippet ? 
               <CardMedia 
                  image={snippet?.thumbnails?.high?.url}
                  alt={snippet?.title}
                  sx={{ height: '180px', width: { md: '350px' }  }}
               /> :
               <Skeleton
                  width={'350px'}
                  height={'180px'}
                  animation={'wave'}
                  variant={'rectangular'}
                  sx={{ bgcolor: '#3F2E3E' }}
               />}
            <CardContent 
            sx={{ backgroundColor: '#1e1e1e',height: '120px' }}>
               <Link to={videoId ? `/video/${videoId}` : 'none'}>
                  {snippet ? 
                     <Typography
                     variant='subtitle1'
                     fontWeight='bold'
                     color='#FFF'>
                        {snippet?.title.slice(0, 30)}
                     </Typography> :
                     <>
                     <Skeleton
                        width={'300px'}
                        height={'20px'}
                        animation={'wave'}
                        variant={'text'}
                        sx={{ bgcolor: '#331D2C' }}
                     />
                     <Skeleton
                        width={'250px'}
                        height={'20px'}
                        animation={'wave'}
                        variant={'text'}
                        sx={{ bgcolor: '#331D2C' }}
                     />
                     </>
                  }
               </Link>
               <Link to={snippet?.channelId ? `/channelDetail/${snippet?.channelId}` : 'none'}>
                  {snippet ?
                     <Typography
                        variant='subtitle2'
                        fontWeight='bold'
                        color='gray'>
                        {snippet?.channelTitle}
                           <CheckCircle 
                              sx={{ fontSize: 12, color: 'gray', ml: '5px' }}/>
                     </Typography> :
                     <Skeleton
                        width={'200px'}
                        height={'20px'}
                        animation={'wave'}
                        variant={'text'}
                        sx={{ bgcolor: '#331D2C' }}
                     />
                  }
               </Link>
            </CardContent>
         </Link>
      </Card>
   )
}

VideoCard.propTypes = {
   video: PropTypes.any,
}

/*
<Parent: Feed.jsx>
<ParentChild: Videos.jsx>
Komponen ini bertugas untuk menampilkan video dalam bentuk card yang dimana datanya berasa dari komponen Videos
*/

export default VideoCard