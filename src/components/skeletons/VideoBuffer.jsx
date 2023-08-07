import { Box, CircularProgress, Stack } from "@mui/material"

const VideoBuffer = () => {
   return (
      <Stack 
         flex={1} 
         justifyContent={'center'} 
         alignItems={'center'} 
         width={'auto'} 
         height={{ xs: 650, md: 720 }}
         >
            <Box>
               <CircularProgress
                  size={100}
                  color="secondary"
               />
            </Box>
      </Stack>
   )
}

export default VideoBuffer