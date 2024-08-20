import React from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

function Game(props){
    const [answers, setAnswers] = React.useState(combineAnswer(props.incorrect_answers, props.correct_answer))
    const [selectedAnswer, setSelectedAnswer] = React.useState()

    const [answerTrue, setAnswerTrue] = React.useState(false)
    const complete = props.complete
    const correctAnswer = htmlEntities(props.correct_answer)

    const answeredStyle = {
        opacity: '0.5',
        cursor: 'default !important',
        pointerEvents: 'none'
    }

    const answerElem = answers.map(data => complete ? 
        <div className={`answer ${data.answer === correctAnswer ? 'true' : ''} ${selectedAnswer === correctAnswer && data.active ? 'true' : data.active ? 'false' : ''}`} style={answeredStyle} key={nanoid()}>
            {data.answer}
        </div>
        :
        <div className={`answer ${data.active ? 'active' : ''}`} key={nanoid()} onClick={() => selectAnswer(data.answer)}>
            {data.answer}
        </div>
    )

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

    function htmlEntities(data) {
        return decode(data)
        // return question.replace(/(&quot\;)/g, "\"").replace(/(&rsquo\;)/g, "\"").replace(/(&#039\;)/g, "\'").replace(/(&amp\;)/g, "\"");
    }

    function combineAnswer(incorrectAnswers, correctAnswer) {
        let allAnswers = []
        incorrectAnswers.map(answer => allAnswers.push({
            answer: htmlEntities(answer),
            active: false
        }))
        allAnswers.push({
            answer: htmlEntities(correctAnswer),
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
    }

    return (
        <div className="question">
            <h1>{htmlEntities(props.question)}</h1>
            <div className="answers">
                {answerElem}
            </div>
        </div>
    )
}

export default Game