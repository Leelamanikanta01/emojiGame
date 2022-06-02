import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img src={emojiUrl} className="emoji-icon" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
