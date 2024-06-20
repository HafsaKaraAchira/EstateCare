import React from 'react';
import { Grid, CssBaseline, Paper, Typography, Card, CardMedia, CardContent } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import defaultTheme from '../styles/theme.js';
import LoginForm from '../components/authentication/LoginForm';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@mui/material/styles';


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
        alt={props.key}
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
        <Typography variant="h7" component="div" 
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

const LoginPage = () => {
  const theme = useTheme();

  const items = [
    {
      label: "Effortless Properties Management at Your Fingertips.",
      image: require(`../assets/login_slider/real-estate-desktop.svg`).default
    },
    {
      label: "Interactive Dashboards for Maximum Control, All Your Data, Beautifully Organized.",
      image: require(`../assets/login_slider/real-estate-dashboard.svg`).default
    },
    {
      label: "Efficient Scheduling for Every Property.",
      image: require(`../assets/login_slider/real-estate-scheduling.svg`).default
    },
    {
      label: "Performance Metrics at a Glance",
      image: require(`../assets/login_slider/real-estate-reporting.svg`).default
    }
  ];

  return (
    // <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={5}
          md={6}
          sx={{
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex', // Use flexbox layout
            flexGrow: 1, // Grow to fill the container
            flexShrink: 0, // Prevent the card from shrinking
            justifyContent: 'center', // Center the carousel horizontally
            alignItems: 'flex-end', // Anchor the carousel to the bottom
            p: '3% 5%', // Add padding around the carousel
            // paddingBottom: '5%', // 5% from the bottom of the wrapper grid
          }}
        >
          <Carousel
            autoPlay={true} // Enable autoplay
            interval={1000} // Set the interval to 1s
            sx={{ 
              height: '100%', 
              width:'100%',
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
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            height: '100vh',
            backgroundColor: (t) => t.palette.background.dark,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: '1%',
          }}
        >
          <LoginForm />
        </Grid>
      </Grid>
    // </ThemeProvider>
  );
};

export default LoginPage;