import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
  return (
    
    <Stack alignItems = "center" mt = "37px" justifyContent= "center"
        p = "20px">
        <Typography fontWeight={700} sx = {{
            fontSize: {lg: '40px', xs: '30px'}}} mb = "50px" textAlign={'center'}>
            A few Exercises You <br /> Should Know.
        </Typography>
        <Box position="relative" mb="72px">
    <TextField
        sx={{
            input: {
                fontWeight: '700',
                border: 'none',
                borderRadius: '40px'
            },
            width: {
                lg: '1170px',
                xs: '350px'
            }
        }}
        height="76px"
        value=""
        onChange={(e) => {
            // Handle the change
        }}
        placeholder='Search Exercises'
        type="text"
    />
</Box>
    
    </Stack>
    )
}

export default SearchExercises