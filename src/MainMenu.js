function MainMenu(props){
    return (
      <div className="main-menu">
        <div className='title'>
          <h1>Quizzical</h1>
          <h2>Some description if needed</h2>
        </div>
        <button className='button' onClick={props.toggleGame}>Start quiz</button>
      </div>
    )
}

export default MainMenu