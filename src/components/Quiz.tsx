import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { QuizTypes } from './Types';
import { Link } from 'react-router-dom';


const Quiz: React.FC<QuizTypes> = ({ name, options, question, setIndex, Index, TotalLenght, selection }) => {

  // using useHook to check weather user has selected any option or Not 

  const [value, setValue] = React.useState('');

  return (
    <div>
      <Grid container spacing={3} justify="center">

        <Grid item xs={10} md={7}>
          <Paper style={{ padding: "50px 50px", margin: "50px 0px", }}>



            <Typography variant="h3" style={{ fontWeight: "bolder", color: "blueviolet" }} >
              Question # {Index + 1}/{TotalLenght}
              <span style={{ color: "rgb(100,100,100)", fontSize: "20px", fontWeight: "lighter" }}><br />
                {`Candidate Name = ${name}`}
              </span>
            </Typography><br /><br />
            <Typography variant="h5" style={{ fontWeight: "bolder" }} >
              {question}
            </Typography><br /><br />

            <FormControl component="fieldset" style={{ display: "flex", justifyContent: "left", marginLeft: "7%" }}>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(e) => { setValue(e.target.value); }}>
                {options.map((options: String, i: number) => (
                  <FormControlLabel
                    key={i}
                    value={options}
                    control={<Radio />}
                    label={options} />))
                }
              </RadioGroup>
            </FormControl>              <br />
            <Link style={{ textDecoration: "none", color: "white" }} to={TotalLenght === Index + 1 ? "/result" : "/quiz"}>
              <Button disabled={value === ''} variant="contained" style={{ width: "25%", marginTop: "10%", display: "flex", marginLeft: "15%" }} onClick={() => { setIndex(++Index); selection(value) }} color="secondary">Next</Button>
            </Link><br /><br />


          </Paper>
        </Grid>

      </Grid>

    </div>
  );
}
export default Quiz;