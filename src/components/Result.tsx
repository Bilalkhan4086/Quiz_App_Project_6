import React from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { ResultProps } from './Types';
import { Link } from 'react-router-dom';


export const Result: React.FC<ResultProps> = ({ name, NoOfQuestions, scoure, Category, level, email }) => {

    // Category is in numbered-string form and we wants in string like science instead of '17' so we crated category function

    const category = () => {
        switch (Category) {
            case "9":
                return ('Gernal knowledge')
            case "17":
                return ('Science')
            case "21":
                return ('Sports')
            default:
                return ('Not defined')
        }
    }

    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item xs={10} md={7}>
                    <Paper style={{ padding: "50px 50px", margin: "50px 0px", }}>

                        <Typography variant="h3" style={{ fontWeight: "bolder", color: "blueviolet" }} >
                            Result
            </Typography>
                        <br /><hr /><br />

                        <Typography variant="h6" style={{ fontWeight: "bolder" }} >
                            <span style={{ color: "red" }}>&nbsp;
                                {name}&nbsp;
                            </span> you source&nbsp;
            <span style={{ color: "green" }}>{scoure}</span>
                &nbsp;out of {NoOfQuestions}
                        </Typography>
                        <br /><hr /><br />

                        <Typography variant="h6" style={{ fontWeight: "bolder" }} >
                            Your diffulty level is&nbsp;
            <span style={{ color: "red" }}>{level}</span>
                        </Typography>
                        <br /><hr /><br />

                        <Typography variant="h6" style={{ fontWeight: "bolder" }} >
                            Your catagory is&nbsp;
            <span style={{ color: "red" }}>{category()}</span>
                        </Typography><br /><hr /><br />

                        <Typography variant="h6" style={{ fontWeight: "bolder" }} >
                            Total number of Questions are&nbsp;
            <span style={{ color: "red" }}>{NoOfQuestions}</span>
                        </Typography>
                        <br /><hr /><br />

                        <Link style={{ textDecoration: "none", color: "white" }} onClick={() => { alert(`Your Result will be mailed to you at ${email}`) }} to="/settings" >
                            <Button variant="contained" style={{ width: "50%" }} color="secondary">
                                Retake Quiz
                            </Button>
                        </Link>
                        <br /><br />
 
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
