import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    isgameOn: true,
    emojisclickList: [],
    topscore: 0,
  }

  finishgame = clickedLength => {
    const {topScore} = this.state
    let {greatScore} = topScore

    if (clickedLength > topScore) {
      greatScore = clickedLength
    }

    this.setState({topscore: greatScore, isgameOn: false})
  }

  emojiclick = id => {
    const {emojisList} = this.props
    const {emojisclicklist} = this.state
    const {clickedLength} = emojisclicklist.length
    const {isEmojipresent} = emojisclicklist.includes(id)

    if (isEmojipresent) {
      this.finishgame(clickedLength)
    } else {
      if (emojisList.length - 1 === clickedLength) {
        this.finishgame(emojisList.length)
      }
      this.setState(prevState => ({
        emojisclicklist: [...prevState.emojisclicklist, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledlist = this.shuffledEmojisList()
    return (
      <ul className="emojis">
        {shuffledlist.map(each => (
          <EmojiCard emojis={each} key={each.id} onClick={this.emojiclick} />
        ))}
      </ul>
    )
  }

  playagain = () => {
    this.setState({emojisclicklist: [], isgameOn: true})
  }

  renderResultscard = () => {
    const {emojisList} = this.props
    const {emojisclickList} = this.state

    const {iswon} = emojisList.length === emojisclickList.length

    return (
      <WinOrLoseCard
        isWon={iswon}
        topScore={emojisclickList.length}
        onClick={this.playagain}
      />
    )
  }

  render() {
    const {isgameOn, emojisclickList, topscore} = this.state
    return (
      <div>
        <div>
          <NavBar
            isgameOn={isgameOn}
            currentscore={emojisclickList.length}
            topscore={topscore}
          />
        </div>
        <div>
          {isgameOn ? this.renderEmojiList() : this.renderResultscard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
