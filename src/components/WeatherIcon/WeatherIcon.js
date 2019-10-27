import React from 'react';
import PropTypes from 'prop-types';
import { WiDaySunny, WiRainMix, WiSnow, WiCloudy, WiThunderstorm, WiDayHaze } from 'weather-icons-react';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  icon: {
    display: 'block',
    margin: '0 auto'
  }
}));

const WeatherIcon = (props) => {
  const classes = useStyles();
  const { type, size } = props;
  if (type) {
    switch (type.toLowerCase()) {
      case 'clear':
        return <WiDaySunny className={classes.icon} size={size} color='#fff' />
      case 'sunshine':
        return <WiDaySunny className={classes.icon} size={size} color='#fff' />
      case 'rain':
        return <WiRainMix className={classes.icon} size={size} color='#fff' />
      case 'snow':
        return <WiSnow className={classes.icon} size={size} color='#fff' />
      case 'clouds':
        return <WiCloudy className={classes.icon} size={size} color='#fff' />
      case 'thunderstorm':
        return <WiThunderstorm className={classes.icon} size={size} color='#fff' />
      case 'haze':
        return <WiDayHaze className={classes.icon} size={size} color='#fff' />
      default:
        return <WiDaySunny className={classes.icon} size={size} color='#fff' />
    }
  }
}

WeatherIcon.defaultProps = {
  size: 100,
  type: ''
}

WeatherIcon.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string
}


export default WeatherIcon;
