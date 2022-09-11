import {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';
import fetchFromAPI from '../utils/fetchFromAPI';


const Feed = () => {
  // sidebar state
  // TODO: change code to update category when sidebar category is clicked 
  const [selectedCategory, setselectedCategory] = useState('New');
  //get videos
  const [videos, setVideos] = useState([]);

  //dynamic code to fetch videos by selected Category ( refer fetchFromAPI.js )
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
      console.log(selectedCategory)
  }, [selectedCategory]);
 
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        <Box sx={{ height: {sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
            <SideBar 
              selectedCategory={selectedCategory}
              setselectedCategory={setselectedCategory}
            />
            <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
                Copyright 2022 PapaStone
            </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
            {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
    </Stack>
  )
}

export default Feed;