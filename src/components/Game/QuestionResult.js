import React from 'react'
const { boolean, func, number, shape, string } = React.PropTypes

const QuestionResult = React.createClass({
  propTypes: {
    activeFact: number,
    fact: shape({
      fact: string,
      truth: boolean
    }),
    nextQuestion: func
  },

  render () {
    const { answer, fact, nextQuestion } = this.props
    const result = (answer === fact.truth) ? 'correct' : 'wrong'

    return (
      <div className='ttr-game-question-result'>
        <h2>{result.toUpperCase()}!</h2>
        <button onClick={nextQuestion}>--></button>
      </div>
    )
  }
})

export default QuestionResult
