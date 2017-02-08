import React from 'react'
import rooster from '../../img/rooster.svg'
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
        <img className='rooster-img' src={rooster} alt='Rooster graphic' />
        <p>{tip}</p>
        <button className='button' onClick={newGame}>Play again</button>
      </div>
    )
  }
})

export default GameResult
