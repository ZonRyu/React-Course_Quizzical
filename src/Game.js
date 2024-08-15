import React from "react";
import { nanoid } from "nanoid";

function Game(props){
    const [answers, setAnswers] = React.useState(combineAnswer(props.incorrect_answers, props.correct_answer))
    const [selectedAnswer, setSelectedAnswer] = React.useState()

    const correctAnswer = props.correct_answer
    const answerElem = answers.map(answer => <div className="answer" key={nanoid()}>{answer}</div>)
    console.log(correctAnswer)
    function removeCharacters(question) {
        return question.replace(/(&quot\;)/g, "\"").replace(/(&rsquo\;)/g, "\"").replace(/(&#039\;)/g, "\'").replace(/(&amp\;)/g, "\"");
    }

    function combineAnswer(incorrectAnswers, correctAnswer) {
        let allAnswers = []
        incorrectAnswers.map(answer => allAnswers.push({
            answer: removeCharacters(answer),
            active: false
        }))
        allAnswers.push({
            answer: removeCharacters(correctAnswer),
            active: false
        })
        // console.log(allAnswers)

        // incorrectAnswers.map(answer => allAnswers.push(answer))
        // allAnswers.push(correctAnswer)
        // incorrectAnswers.map((item) => {
        //     item.incorrect_answers.map((incorrectAnswer) => {
        //         allAnswers.push(incorrectAnswer)
        //     });
        // });
        return allAnswers
    }


    return (
        <div className="question">
            <h1>{removeCharacters(props.question)}</h1>
            <div className="answers">
                {answerElem}
                {/* {combineAnswer(props.incorrect_answers, props.correct_answer)}
                <div className="answer">Adios</div>
                <div className="answer">Hola</div>
                <div className="answer">Au Revoir</div>
                <div className="answer">Salir</div> */}
            </div>
        </div>
    )
}

export default Game