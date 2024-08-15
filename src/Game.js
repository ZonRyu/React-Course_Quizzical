function Game(){
    return (
        <div className="App-content">
            <div className="question">
                <h1>How would you say goodbye in Spannish?</h1>
                <div className="answers">
                    <div className="answer active">Adios</div>
                    <div className="answer">Hola</div>
                    <div className="answer">Au Revoir</div>
                    <div className="answer">Salir</div>
                </div>
            </div>
            <div className="question">
                <h1>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</h1>
                <div className="answers">
                    <div className="answer active">Cabbage Patch Kids</div>
                    <div className="answer">Transformers</div>
                    <div className="answer">Care Bears</div>
                    <div className="answer">Rubik's Cube</div>
                </div>
            </div>
            <div className="question">
                <h1>What is the hottest planet in our Solar System?</h1>
                <div className="answers">
                    <div className="answer">Mercury</div>
                    <div className="answer active">Venus</div>
                    <div className="answer">Mars</div>
                    <div className="answer">Saturn</div>
                </div>
            </div>
            <div className="question">
                <h1>In which country was the caesar salad invented?</h1>
                <div className="answers">
                    <div className="answer false opacity">Italy</div>
                    <div className="answer opacity">Portugal</div>
                    <div className="answer true">Mexico</div>
                    <div className="answer opacity">France</div>
                </div>
            </div>
            <div className="question">
                <h1>How Many Hearts Does An Octopus Have?</h1>
                <div className="answers">
                    <div className="answer opacity">One</div>
                    <div className="answer opacity">Two</div>
                    <div className="answer true">Three</div>
                    <div className="answer opacity">Four</div>
                </div>
            </div>
            <div className="score-button">
                <h3>You scored 3/5 correct answers</h3>
                <button className="button">Check Answer</button>
            </div>
        </div>
    )
}

export default Game