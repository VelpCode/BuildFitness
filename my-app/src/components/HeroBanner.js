import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (

    <Box sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: {sm: '50px'}

    }} position = "relative" p = "20px">
        <Typography color = '#FF2625' fontWeight = "600" fontSize={25} mb={1}>
            MuscleMantra
        </Typography>
        <Typography fontWeight={700} sx={{fontSize: { lg: '44px', xs: '40px'}}} mb="23px" mt = "30px" >
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize={22} lineHeight={2} mb={3}>
            Check out the most effective exercises.
        </Typography>
        <Button variant='contained' color='error' href ="#exercises">
            Explore Exercises
        </Button>
        <Typography fontWeight={600}
        color = "#ff2625"
        sx = {{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none'}
        }}
        fontSize={200}>
            Exercise

        </Typography>
        <img src = {HeroBannerImage} alt ="banner" className = "hero-banner-img" />
    </Box>
    

  )
}

export default HeroBanner