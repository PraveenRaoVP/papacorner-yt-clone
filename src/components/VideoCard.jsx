import React from 'react';
import { Link } from 'react-router-dom';
import { CardMedia, Card, Typography, CardContent } from '@mui/material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';


const VideoCard = ({ video: { id: { videoId}, snippet} }) => {
  

  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia 
            image={ snippet?.thumbnails?.high?.url || demoThumbnailUrl }
            alt={ snippet?.title }
            sx={{ width: 358, height: 180 }}
          />
        </Link>
        <CardContent 
          sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                {snippet?.title.slice(0,60) || demoVideoTitle }</Typography>
            </Link>
            <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
              <Typography variant="subtitle2" fontWeight="bold" color="gray">
                { snippet?.channelTitle || demoChannelTitle }
                <CheckCircle />
              </Typography>
            </Link>
          </CardContent>
    </Card>
  )
}

export default VideoCard;
