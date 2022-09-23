import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import fetchFromAPI from '../utils/fetchFromAPI';

const SearchFeed = () => {
  // get videos
  const [videos, setVideos] = useState(null);
  // populate searchTerm from SearchBar
  const { searchTerm } = useParams();
  // dynamic code to fetch videos by selected Category ( refer fetchFromAPI.js )
  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
      // console.log(searchTerm)
  }, [searchTerm]);
 
  return (    
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for <span style={{ color: '#FC1503' }}>'{searchTerm}'</span>
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' }}}>
          <Videos videos={videos} direction="column" />
        </Box>
      </Box>
    </Box>
  )
}

export default SearchFeed;