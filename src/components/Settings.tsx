import React,{useState} from 'react';
import {Grid,Paper,Typography,TextField, Button, FormControl, InputLabel, Select} from '@material-ui/core';
import {Fetchdata} from './Data'
import { SettingTypes } from './Types';
import { Link } from 'react-router-dom';


const Settings:React.FC<SettingTypes> = ({get,setTata}) => {

const [Fname, setFname]= useState('');
const [Email, setEmail] = useState('');
const [Q , setQ] = useState("10");
const [Level, setLevel] = useState('easy');
const [Cat, setCat] = useState('9');

// we create details to send information in an object from Settings to App.tsx 

const details = {
  name:Fname,
  email: Email,
  NoOfQuestions:Q,
  Cat:Cat,
  Level:Level
}


return (
<div>
<Grid container spacing={3} justify="center">
        <Grid item xs={10} md={7}>
          <Paper style={{ padding:"50px 50px",margin:"50px 0px",}}>
          
              <Typography variant="h3" style={{fontWeight:"bolder",color:"blueviolet"}} >
                Welcome to Quiz
                </Typography>
                <br/><br/>
              
              <TextField type="text" id="fullname" style={{width:"100%"}} onChange={(e)=>{setFname(e.target.value)}} label="Full Name" />
              <br/><br/>
              <TextField type="text" required={true} id="email" onChange={(e)=>{setEmail(e.target.value)}} style={{width:"100%"}} label="Email" />
              <br/><br/>
              <TextField type="number" required={true} id="noofquestions" value={Q} onChange={(e)=>{setQ(e.target.value)}} style={{width:"100%"}} label="No. of Questions" />
               <br/><br/>
              <FormControl required={true} style={{width:"100%",textAlign:"left"}}>
                <InputLabel id="quiztype">Diffulty level</InputLabel>
                  <Select native labelId="quiztype" id="quiztype" onBlur={(e)=>{setLevel(e.target.value)}}>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                  </Select>
              </FormControl>
              <br/><br/>
              <FormControl required={true} style={{width:"100%",textAlign:"left"}}>
                <InputLabel id="sunjectforquiz">Catagory</InputLabel>
                <Select native labelId="sunjectforquiz" onBlur={(e)=>{setCat(e.target.value)}} id="sunjectforquiz">
                  <option value="9">Gernal knowledge</option>
                  <option value="17">Science</option>
                  <option value="21">Sports</option>
                </Select>
              </FormControl><br/><br/><br/>
              <Link style={{textDecoration:"none",color:"white"}} to="/quiz">
                <Button disabled={(Fname === '') || (Email === '') || (Q === '' || Q === '0') || (Cat === '') || (Level === '')} variant="contained" style={{width:"50%"}} onClick={async()=>{setTata(await Fetchdata(Q,Cat,Level));get(details)}} color="secondary">
                  Start Quiz
                </Button>
              </Link>
              <br/><br/>

          </Paper>
        </Grid>
</Grid>
</div>
    );
}
export default Settings;