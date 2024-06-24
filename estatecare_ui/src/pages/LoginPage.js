import React from 'react';
import { Grid, CssBaseline, Paper } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import LoginForm from '../components/authentication/LoginForm';
import CustomImageCarousel from '../components/authentication/CustomImageCarousel';

const LoginPage = () => {
  // const theme = useTheme();

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
        <CustomImageCarousel items={items} />
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
  );
};

export default LoginPage;