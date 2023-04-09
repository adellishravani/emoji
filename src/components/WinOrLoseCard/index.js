const WinOrLoseCard = props => {
  const {isWon, topScore, playagain} = props

  const heading = isWon ? 'You Won' : 'You Lose'
  const url = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div>
      <div>
        <h1>{heading}</h1>
        <p>Score</p>
        <p>{topScore}/12</p>
        <button type="button" onClick={playagain}>
          Play Again
        </button>
      </div>
      <img src={url} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
