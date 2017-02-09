import React from 'react'
import Rooster from '../../components/Rooster/Rooster'
const { number, func } = React.PropTypes

const GameResult = React.createClass({
  propTypes: {
    correctCount: number,
    length: number,
    intuition: number,
    newGame: func
  },

  render () {
    const { correctCount, length, intuition, newGame } = this.props
    let tip

    if (intuition === 0) {
      tip = 'You seem pretty indifferent about when to trust the rooster ¯\\_(ツ)_/¯'
    } else if (intuition > 0) {
      tip = 'Looks like you had pretty good intuition to trust the rooster! 👊'
    } else {
      tip = 'You might need some practice knowing when to trust the rooster 😕'
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
})

export default GameResult
