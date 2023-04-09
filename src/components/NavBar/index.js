import './index.css'

const NavBar = props => {
  const {isgameOn, currentscore, topscore} = props

  return (
    <nav className="nav">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      <h1 className="heading">Emoji Game</h1>
      {isgameOn && (
        <div className="scores">
          <p className="self">Score:{currentscore}</p>
          <p className="self">Top Score:{topscore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
