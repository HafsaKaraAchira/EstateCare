import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function CarouselItem(props) {
    return (
      <Card elevation={0} 
        sx={{ 
          position: 'absolute', // Position the card absolutely
          top: '0', // Anchor the card to the top of the carousel
          bottom: '7%', // Anchor the card to the bottom of the carousel
          width: '100%', // Ensure the card fills the carousel
          m: '0 auto', // Center the card horizontally
          padding: '0% 3%', // Add padding around the card
          bgcolor: 'transparent', // Make the card background transparent
        }}
      >
        <CardMedia
          component="img"
          image={props.item.image}
          alt={props.item.label}
          sx={{ 
            height: '90%', 
            width: '100%', // Ensure the width adjusts to the card's width
            objectFit: 'contain', // Maintain aspect ratio and fit within the given height
            maxWidth:'fit-content'
          }}
        />
        <CardContent 
          sx={{ 
            height: '20%',
            position: 'absolute', // Position the content absolutely
            bottom: '0%', // Anchor the content to the bottom of the card
            margin: '0 auto', // Center the content horizontally
            paddingTop: '5%', // Add padding to the top of the content
            left: '5%', // Center the dots horizontally
            right: '5%', // Center the dots horizontally
            // textAlign: 'center', // Center the text horizontally
          }}
        >
          <Typography variant="h8" component="div" 
            sx={{ 
              height: '100%', 
              fontSize: {
                xs: '0.75rem', // for extra-small devices
                sm: '0.875rem', // for small devices
                md: '1rem', // for medium devices
                lg: '1.125rem', // for large devices
                xl: '1.25rem', // for extra-large devices
              },
              // display: 'flex', 
              // alignItems: 'center', 
              // textAlign: 'center',
            }}
          >
            {props.item.label}
          </Typography>
        </CardContent>
      </Card>
    );
  }

export default CarouselItem;