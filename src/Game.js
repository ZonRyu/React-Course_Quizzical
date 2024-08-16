import React from "react";
import { nanoid } from "nanoid";

function Game(props){
    const [answers, setAnswers] = React.useState(combineAnswer(props.incorrect_answers, props.correct_answer))
    const [selectedAnswer, setSelectedAnswer] = React.useState()

    const [answerTrue, setAnswerTrue] = React.useState(false)
    const correctAnswer = props.correct_answer
    const answerElem = answers.map(data => <div className={`answer ${data.active ? 'true' : ''}`} key={nanoid()} onClick={() => selectAnswer(data.answer)}>{data.answer}</div>)

    React.useEffect(() => {
        let score = JSON.parse(localStorage.getItem('score'))
        if(answerTrue) {
            localStorage.setItem('score', JSON.stringify(score + 1))
            setAnswerTrue(true)
        }else{
            localStorage.setItem('score', JSON.stringify(score - 1))
            setAnswerTrue(false)
        }
    }, [answerTrue])

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
        return allAnswers
    }

    function selectAnswer(selected) {
        answers.map(answer => selected === answer.answer ? answer.active = true : answer.active = false)
        selected === correctAnswer ? setAnswerTrue(true) : setAnswerTrue(false)
        setAnswers([...answers])
        setSelectedAnswer(selected)
        console.log(answers)
    }

    return (
        <div className="question">
            <h1>{removeCharacters(props.question)}</h1>
            <div className="answers">
                {answerElem}
            </div>
        </div>
    )
}

export default Game