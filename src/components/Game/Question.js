import React from 'react'

class Question extends React.Component {
  constructor (props) {
    super(props)

    this.onAnswerTrue = this.onAnswerTrue.bind(this)
    this.onAnswerFalse = this.onAnswerFalse.bind(this)
  }

  // TODO: combine true/false
  onAnswerTrue () {
    this.props.submitAnswer(true)
  }

  // TODO: combine true/false
  onAnswerFalse () {
    this.props.submitAnswer(false)
  }

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
}

const { func, number, shape, string } = React.PropTypes
Question.propTypes = {
  fact: shape({
    fact: string,
    activeFact: number
  }),
  submitAnswer: func
}

export default Question
