import React from 'react';
import { Grid, CssBaseline, Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '../styles/theme.js';
import LoginForm from '../components/authentication/LoginForm';
import Carousel from 'react-material-ui-carousel';
// import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
// import SwipeableViews from 'react-swipeable-views';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


function Item(props) {
  return (
    <Paper key={props.key} className="carousel-item">
      <img src={props.item.image} alt={props.item.label} className="carousel-image" />
      <Typography className="carousel-label" variant="h5">
        {props.item.label}
      </Typography>
    </Paper>
  )
}

// const NextArrow = ({ onClick }) => {
//   return (
//     <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-primary text-white p-2 cursor-pointer rounded-full" onClick={onClick}>
//       <FaArrowRight />
//     </div>
//   );
// };

// const PrevArrow = ({ onClick }) => {
//   return (
//     <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-primary text-white p-2 cursor-pointer rounded-full" onClick={onClick}>
//       <FaArrowLeft />
//     </div>
//   );
// };


const LoginPage = () => {

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [open, setOpen] = useState(true);

  // const images =[
  //   require(`../assets/login_slider/real-estate-desktop.svg`).default,
  //   require(`../assets/login_slider/real-estate-dashboard.svg`).default,
  //   require(`../assets/login_slider/real-estate-scheduling.svg`).default,
  //   require(`../assets/login_slider/real-estate-reporting.svg`).default,
  // ];

  // const legends = [
  //   'Effortless Properties Management at Your Fingertips.',
  //   'Interactive Dashboards for Maximum Control, All Your Data, Beautifully Organized.',
  //   'Efficient Scheduling for Every Property.',
  //   'Performance Metrics at a Glance',
  // ]

  // const settings = {
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   dots: true,
  //   customPaging: i => (
  //     <div
  //       className={`cursor-pointer ${i === currentSlide ? 'w-6 h-4 mr-4 bg-secondary rounded-lg' : 'w-4 h-4 bg-gray-400 rounded-full hover:bg-gray-700'}`}
  //     ></div>
  //   ),
  //   dotsClass: "slick-dots flex justify-center items-center space-x-2 mt-4",
  //   infinite: true,
  //   speed: 700,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   beforeChange: (current, next) => setCurrentSlide(next),
  // };

  // const [open, setOpen] = useState(true);

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
    <ThemeProvider theme={defaultTheme}>
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
            p: '7%',
            // display: 'flex',
            // alignItems: 'center',
            // position: 'relative', // Add this line
            // overflow: 'hidden',
            // justifyContent: 'center',
            // flexDirection: 'column',
          }}
        >
          <Carousel>
            {
              items.map((item, index) => <Item key={index} item={item} />)
            }
          </Carousel>
          {/* <Slider {...settings} 
            sx={{
              // width: '80%', 
              // height: '10%',
              // alignSelf: 'center' // Add this line
              // position: 'absolute', 
              // top: '50%', 
              // left: '50%', 
              // transform: 'translate(-100%, -100%)' 
            }}
          >
            {images.map((image, index) => (
              <div key={index} 
                sx={{ 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={image} alt="" 
                  sx={{ 
                    maxWidth: '80%', 
                    // maxHeight: 'fit-content',
                  }} 
                />
                <Typography
                  component="h2"
                  variant="h7"
                  sx={{
                    fontSize: '1.2rem',
                    margin: '1rem' ,
                    // marginTop: '1rem' ,
                    textAlign: 'center',
                  }}
                >
                  {legends[index]}
                </Typography>
              </div>
            ))}
          </Slider> */}
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
    </ThemeProvider>
  );
};

export default LoginPage;