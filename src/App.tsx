import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import { Result } from './components/Result';
import Settings from './components/Settings';
import { QuestionData } from './components/Types';



function App() {
  
  const [Data, setData] = useState<any>({});
  const [Tata, setTata] = useState<QuestionData[]>([]);
  const [Index, setIndex] = useState(0);
  const [scoure, setscoure] = useState(0);

  //     get is used to get data from setting.tsx

  const get = (q: object): any => {
    console.log("Data from App.tsx", q);
    setData(q);
    console.log("Data from App.tsx", Data);

  }

  // setting is used to use render Settings component

  const setting = () => {
    return (<Settings get={get} setTata={setTata} />)
  }

  // selection is used to use check whether answer is right or wrong

  const selection = (q: string) => {
    if (Tata[Index].correct_answer === q) {
      setscoure(scoure + 1);
    }
  }

  // quiz is used to use render Quiz component

  const quiz = () => {
    if (!Tata.length) {
      return (
        <div>Loading data ...</div>
      )
    }
    return (<Quiz question={Tata[Index].question} name={Data.name} setIndex={setIndex} selection={selection} TotalLenght={Tata.length} Index={Index} options={Tata[Index].options} />)
  }

  // home is used to use render Buttons

  const home = () => {
    return (<div style={{ marginTop: "40px" }}><Link style={{ textDecoration: "none", color: "white" }} to={'/settings'}><Button variant="contained" color="primary">Start</Button></Link>{'           '}
      {Tata.length !== 0 &&
        <Link style={{ textDecoration: "none", color: "white" }} to={'/settings'}><Button variant="contained" color="secondary">Leave</Button></Link>
      }
    </div>)
  }

  // result is used to use render Result component

  const result = () => {
    return (<Result name={Data.name} level={Data.Level} NoOfQuestions={Data.NoOfQuestions} Category={Data.Cat} scoure={scoure} email={Data.email} />)
  }

  // returning App.tsx

  return (
    <div className="App">

      {/* created some routes for Quiz App */}

      <Route path='/' component={home} />
      <Route path="/settings" component={setting} />
      <Route path="/quiz" component={quiz} />
      <Route path="/result" component={result} />

    </div>
  );
}

export default App;
