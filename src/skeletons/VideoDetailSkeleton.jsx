import { Box, Skeleton, Stack } from '@mui/material'

const VideoDetailSkeleton = () => {
   return (
      <Box>
         <Stack>
            <Skeleton
               sx={{ bgcolor: '#1B262C' }}
               variant="rectangular"
               animation="wave"
               width={'auto'}
               height={500}
            />
         </Stack>
      </Box>
   )
}

export default VideoDetailSkeleton