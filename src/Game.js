import React from "react";
import { nanoid } from "nanoid";

function Game(props){
    const [answers, setAnswers] = React.useState(combineAnswer(props.incorrect_answers, props.correct_answer))
    const [selectedAnswer, setSelectedAnswer] = React.useState()

    const correctAnswer = props.correct_answer
    const answerElem = answers.map(data => <div className={`answer ${data.active ? 'active' : ''}`} key={nanoid()} onClick={() => selectAnswer(data.answer)}>{data.answer}</div>)

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
        allAnswers.sort(() => Math.random() - 0.5);
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

    function selectAnswer(selected) {
        answers.map(answer => selected === answer.answer ? answer.active = true : answer.active = false)
        setAnswers([...answers])
        console.log(answers)
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