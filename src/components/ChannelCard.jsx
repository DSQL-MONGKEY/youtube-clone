import { Box, CardContent, CardMedia, Skeleton, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"

const ChannelCard = ({ channelDetail }) => {

  const {
    brandingSettings,
    statistics
  } = channelDetail

  return (
    <Box
    sx={{ 
      boxShadow: 'none',
      borderRadius: '20px',
    }}
    >
      <Link to={`/channelDetail/${channelDetail?.snippet?.channelId}`}>
        <CardContent
          sx={{ display:'flex', flexDirection:{ xs: 'column', md: 'row' }, justifyContent:'center', alignItems:'center', gap: 3 , color:'#fff' }}
        >
          {brandingSettings ?
            <CardMedia 
            component={'img'} 
            image={brandingSettings?.image?.bannerExternalUrl} 
            sx={{ borderRadius:'50%', height:'180px', width:'180px', mb:2, border:'1px solid #fff' }}/> :
            <Skeleton
              variant={'circular'}
              height={'180px'}
              width={'180px'}
              animation={'wave'}
              sx={{ bgcolor: '#331D2C' }}
            />
          }
          <Box sx={{ display:'flex', flexDirection:'column', gap:'5px'  }}>
            {brandingSettings && statistics ?
              <>
                <Typography
                  variant={'subtitle1'}
                  fontWeight={'bold'}
                  gutterBottom
                >
                  {brandingSettings?.channel?.title}
                </Typography>
                <Typography
                  variant={'subtitle2'}
                  fontWeight={'bold'}
                  color={'gray'}
                >
                  {statistics?.subscriberCount} subscribers
                  &nbsp;
                  {statistics?.videoCount} Videos
                </Typography>
                <Typography
                  variant={'body1'}
                  fontWeight={'thin'}
                >
                  {brandingSettings?.channel?.description}
                </Typography>
              </> :
              <>
                <Skeleton
                  variant={'text'}
                  width={'150px'}
                  animation={'wave'}
                  sx={{ bgcolor: '#331D2C' }}
                />
                <Skeleton
                  variant={'text'}
                  width={'200px'}
                  animation={'wave'}
                  sx={{ bgcolor: '#331D2C' }}
                />
                <Skeleton
                  variant={'text'}
                  width={'280px'}
                  animation={'wave'}
                  sx={{ bgcolor: '#331D2C' }}
                />
              </>
            }
          </Box>
        </CardContent>
      </Link>
    </Box>
  )
}

ChannelCard.propTypes = {
  channelDetail: PropTypes.any, 
}

export default ChannelCard