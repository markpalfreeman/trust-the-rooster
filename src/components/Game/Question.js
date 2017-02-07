import React from 'react'
const { boolean, func, shape, string } = React.PropTypes

const Question = React.createClass({
  propTypes: {
    fact: shape({
      fact: string,
      truth: boolean
    }),
    submitAnswer: func
  },

  // FIX THIS!
  onAnswerTrue () {
    this.props.submitAnswer(true)
  },

  // FIX THIS!
  onAnswerFalse () {
    this.props.submitAnswer(false)
  },

  render () {
    const { fact } = this.props
    return (
      <div className='ttr-game-question'>
        <h2>{fact.fact}</h2>
        <button className='button' onClick={this.onAnswerTrue}>True</button>
        <button className='button' onClick={this.onAnswerFalse}>False</button>
      </div>
    )
  }
})

export default Question
