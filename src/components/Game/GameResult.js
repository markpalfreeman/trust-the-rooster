import React from 'react'
import Rooster from '../../components/Rooster/Rooster'

class GameResult extends React.Component {
  render () {
    const { correctCount, length, intuition, newGame } = this.props
    let tip

    if (intuition < -1) {
      tip = 'You might need some practice knowing when to trust the rooster 😕'
    } else if (intuition <= 1) {
      tip = 'You seem pretty indifferent about when to trust the rooster ¯\\_(ツ)_/¯'
    } else if (intuition <= (length - 1)) {
      tip = 'You have pretty good intuition to trust the rooster! 👊'
    } else {
      tip = 'Perfect! You trusted the rooster the exact right amount 🎉 \nYou win $5!'
    }

    return (
      <div className='ttr-game-result'>
        <h1>{correctCount}/{length}</h1>
        <span className='rooster-img'>
          <Rooster fill='#CA3A36' />
        </span>
        <p>{tip}</p>
        <button className='button' onClick={newGame}>Play again</button>
      </div>
    )
  }
}

const { number, func } = React.PropTypes
GameResult.propTypes = {
  correctCount: number,
  length: number,
  intuition: number,
  newGame: func
}

export default GameResult
