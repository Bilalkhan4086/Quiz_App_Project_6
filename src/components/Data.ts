import { QuestionData, Quiz } from './Types';

// suffle function for shuffling right and wrong answers

const suffle = (obj: string[]) => {
  return (
    [...obj].sort(() => Math.random() - 0.5)
  )
}


export const Fetchdata = async (q: number, cat: String, level: String): Promise<QuestionData[]> => {


  // fetching data in res and passing it to AllData in json format

  const res = await fetch(`https://opentdb.com/api.php?amount=${q}&category=${cat}&difficulty=${level}`);
  const AllData = await res.json();

  // converting AllData to RealData to make it useable and to make options by suffling correct and wrong answer

  const RealData: QuestionData[] = AllData.results.map((results: Quiz, i: number) => {
    return {
      questionNumber: i
      , category: results.category,
      type: results.type,
      difficulty: results.difficulty,
      question: results.question,
      correct_answer: results.correct_answer,
      options: suffle(results.incorrect_answers.concat(results.correct_answer))
    }
  })
  return (RealData);
}