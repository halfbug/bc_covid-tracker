import React from 'react';
import Link from '@material-ui/core/Link';
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TCards({cardTitle, value, lastUpdate, cardSubtitle }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{cardTitle}</Title>
      <Typography variant="h5" component="h2">
        <CountUp start={0} end={value} duration={2.75} separator="," />
      </Typography>
      <Typography color="textSecondary">
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography variant="body2" component="p">
        {cardSubtitle}
      </Typography>
      <div>
       
      </div>
    </React.Fragment>
  );
}