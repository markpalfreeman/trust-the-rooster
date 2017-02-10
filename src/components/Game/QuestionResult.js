import React from 'react'

class QuestionResult extends React.Component {
  render () {
    const { answer, fact, nextQuestion } = this.props
    const result = (answer === fact.truth) ? 'correct' : 'wrong'

    return (
      <div className={'ttr-game-question-bg ' + result}>
        <div className='ttr-game-question-result'>
          <h2>{result.toUpperCase()}!</h2>
          <button className='button' onClick={nextQuestion}>--></button>
        </div>
      </div>
    )
  }
}

const { boolean, func, number, shape, string } = React.PropTypes
QuestionResult.propTypes = {
  activeFact: number,
  fact: shape({
    fact: string,
    truth: boolean
  }),
  nextQuestion: func
}

export default QuestionResult
