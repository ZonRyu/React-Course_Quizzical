function MainMenu(){
    return (
    <div className='App-content' style={{height: '430px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="main-menu">
        <div className='title'>
          <h1>Quizzical</h1>
          <h2>Some description if needed</h2>
        </div>
        <button className='button'>Start quiz</button>
      </div>
    </div>
    )
}

export default MainMenu