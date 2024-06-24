import React from 'react';
import Carousel from 'react-material-ui-carousel'; 
import { useTheme } from '@mui/material/styles';
import CarouselItem from './CarouselItem';


const CustomImageCarousel = ({ items, autoplayed = true, interval = 1000 }) => {
    const theme = useTheme();

    return ( <Carousel
        autoPlay={autoplayed} // Enable autoplay
        interval={interval} // Set the interval to 1s
        sx={{
            height: '100%',
            width: '100%',
        }} // Increase the height of the carousel
        navButtonsProps={{
            style: {
                // backgroundColor: 'primary.main', // Change the arrow background color
                color: theme.palette.primary.dark, // Change the arrow color
            },
        }}
        navButtonsWrapperProps={{
            style: {
                bottom: '0', // Move the arrows to the bottom
                top: 'unset',
            },
        }}
        indicatorIconButtonProps={{
            style: {
                padding: '16px', // Add padding to the dots
                width: '24px', // Increase the width of each dot
                height: '24px', // Increase the height of each dot
                color: theme.palette.primary.dark, // Change the dot color with transparency
                //backgroundColor: theme.palette.primary.dark, // Change the dot color with transparency
            },
        }}
        activeIndicatorIconButtonProps={{
            style: {
                //backgroundColor: theme.palette.secondary.main, // Change the active dot color
                color: theme.palette.secondary.main, // Change the active dot color
            },
        }}
        indicatorContainerProps={{
            style: {
                position: 'absolute', // Position the dots absolutely
                bottom: '0', // Anchor the dots to the bottom of the carousel
                left: '50%', // Center the dots horizontally
                transform: 'translateX(-50%)', // Ensure the dots are centered
                mt: '20%', // Push the dots down from the carousel
            },
        }}
    >
        {items.map((item, index) => <CarouselItem key={index} item={item} />)}
    </Carousel>
    ) ;
};

export default CustomImageCarousel;