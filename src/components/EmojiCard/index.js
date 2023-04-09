const EmojiCard = props => {
  const {emojis, emojiclick} = props
  const {emojiName, emojiUrl} = emojis

  return (
    <li className="emojicard">
      <button type="button" onClick={emojiclick}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
