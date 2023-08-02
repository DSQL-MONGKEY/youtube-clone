import { Box, CardContent } from "@mui/material"
import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box
    sx={{ 
      boxShadow: 'none',
      borderRadius: '20px'
    }}
    >
      <Link to={`/channel/${channelDetail}`}>
        <CardContent>
          
        </CardContent>
      </Link>
    </Box>
  )
}

ChannelCard.propTypes = {
  channelDetail: PropTypes.any,
}

export default ChannelCard