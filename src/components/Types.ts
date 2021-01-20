
export type Quiz = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export type QuestionData = {
    questionNumber: number,
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    options: string[]
}

export type QuizTypes = {
    options: string[],
    question: string,
    setIndex: (Index: number) => void,
    Index: number,
    TotalLenght: number
    selection: (e: string) => void,
    name: string

}

export type ResultProps = {
    name: string,
    level: string,
    NoOfQuestions: string,
    Category: string,
    scoure: number,
    email: string
}

export type SettingTypes = {
    get: (q: Object) => void
    setTata: (d: QuestionData[]) => void;
}

export type details = {
    name: string,
    email: string,
    NoOfQuestions: string,
    Cat: string,
    Level: string
}