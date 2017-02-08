import React from 'react'
const { func, number, shape, string } = React.PropTypes

const Question = React.createClass({
  propTypes: {
    fact: shape({
      fact: string,
      activeFact: number
    }),
    submitAnswer: func
  },

  // TODO: combine true/false
  onAnswerTrue () {
    this.props.submitAnswer(true)
  },

  // TODO: combine true/false
  onAnswerFalse () {
    this.props.submitAnswer(false)
  },

  render () {
    const { activeFact, fact } = this.props
    return (
      <div className='ttr-game-question'>
        <h4>Question #{activeFact + 1}</h4>
        <h2>{fact.fact}</h2>
        <button className='button' onClick={this.onAnswerTrue}>True</button>
        <button className='button' onClick={this.onAnswerFalse}>False</button>
      </div>
    )
  }
})

export default Question
