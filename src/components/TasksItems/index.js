import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import { Container, TitleText } from './styles';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const TasksItems = props => (
  <Container>
    <div>
      {
        props.check ? (<FaCheckCircle
          size={20}
          color='#3751FF'
        />) : (
          <RadioButtonUncheckedIcon
            size={20}
            color='#ddd'
            fontSize='medium'
          />
        )
      }
      <TitleText>{props.title}</TitleText>
    </div>
    <ThemeProvider theme={theme}>
      <Button variant="contained" color={props.typeButton}>{props.textButton}</Button>
    </ThemeProvider>
  </Container>
);

export default TasksItems;
