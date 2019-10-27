import React, { useEffect, Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import { getWeather, weatherToggleTemperature } from './store/actions/weatherActions';

// React Material Components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Custon Components
import MainLoader from './components/MainLoader/MainLoader';
import WeatherIcon from './components/WeatherIcon/WeatherIcon';
import './App.css';

// Hooks
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(2),
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

const App = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { loading, error, weather, getWeather, weatherToggleTemperature, toggle} = props;

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location.coords.latitude && location.coords.longitude) {
          getWeather(location);
        }
      }, (err) => {
        console.log(err.message)
      }, options);
    }
  }, [getWeather]);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { 
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
      }})
    } 
  });

  return (
    <Fragment>
      {!loading ? <AppBar component="div" color="primary" position="static">
        <Container className={classes.heroContent} maxWidth="xs" >
          <Typography color="secondary"  variant="h3" align="center" paragraph>{weather.name}</Typography>
          <Typography component="h2" variant="h5" align="center" paragraph>{weather.weather[0].description}</Typography>
          <WeatherIcon type={weather.weather[0].main} size={150} />
          <Typography align="center" color="secondary" component="p" variant="h2" paragraph>{toggle ? Math.floor((weather.main.temp * 1.8) + 32) : Math.floor(weather.main.temp)}°</Typography>
          <Button color="secondary" variant="contained" onClick={weatherToggleTemperature}>Turn to {toggle ? 'Celcius' : 'Farenheit' }</Button>
        </Container>
      </AppBar> : <MainLoader />}
    </Fragment>
  )
}


const mapStateToProps = ({ weather }) => ({
  loading: weather.loading,
  error: weather.error,
  weather: weather.data,
  toggle: weather.toggle
})

const mapDispatchToProps = {
  getWeather,
  weatherToggleTemperature
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
