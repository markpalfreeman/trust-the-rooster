import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Question from './Question'
import QuestionResult from './QuestionResult'
import factsData from '../../facts.json'

const Game = React.createClass({
  getInitialState () {
    return {
      facts: [],
      activeFact: 0,
      answers: [],
      correctCount: 0,
      totalCount: 20,
      showResult: false
    }
  },

  componentWillMount () {
    const { totalCount } = this.state
    const numTrue = Math.floor(Math.random() * totalCount)
    const numFalse = totalCount - numTrue

    let facts = this.shuffle(factsData.facts).slice(0, numTrue)
      .concat(this.shuffle(factsData.lies).slice(0, numFalse))

    this.setState({facts: this.shuffle(facts)})
  },

  onAnswer (truth) {
    const { activeFact, answers, correctCount, facts } = this.state
    let count = correctCount
    if (truth === facts[activeFact].truth) count = correctCount + 1

    this.setState({
      answers: answers.concat(truth),
      correctCount: count,
      showResult: true
    })
  },

  nextQuestion () {
    const { activeFact, totalCount} = this.state
    let active = activeFact

    if ((activeFact + 1) < totalCount) {
      active = activeFact + 1
    }

    this.setState({
      showResult: false,
      activeFact: active
    })
  },

  shuffle (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  },

  render () {
    var { activeFact, answers, correctCount, facts, totalCount } = this.state

    return (
      <div className='ttr-page'>
        <h1>Game</h1>
        <div className='ttr-scoreboard'>
          <h4>Question #{activeFact + 1}</h4>
          {/*<h4>Correct: {correctCount} / {activeFact}</h4>*/}
        </div>
        <ReactCSSTransitionGroup
          transitionName='swapQuestion'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.state.showResult
            ? <QuestionResult fact={facts[activeFact]} answer={answers[activeFact]} nextQuestion={this.nextQuestion}/>
            : <Question fact={facts[activeFact]} submitAnswer={this.onAnswer}/>
          }
        </ReactCSSTransitionGroup>
        <p>{activeFact + 1} / {totalCount}</p>
        <p>correct: {correctCount}</p>
      </div>
    )
  }
})

export default Game
