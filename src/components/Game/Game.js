import React from 'react'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Question from './Question'
import QuestionResult from './QuestionResult'
import GameResult from './GameResult'
import IntuitionMeter from './IntuitionMeter'
import factsData from '../../facts.json'
import './Game.scss'

const Game = React.createClass({
  getInitialState () {
    return this.getEmptyState()
  },

  componentWillMount () {
    this.setGameFacts();
  },

  getEmptyState () {
    return {
      facts: [],
      activeFact: 0,
      answers: [],
      numTrue: 0,
      correctCount: 0,
      totalCount: 5,
      showQuestionResult: false,
      showGameResult: false
    }
  },

  getIntuition () {
    // +1 for correct, -1 for incorrect
    // correct minus incorrect
    return this.state.correctCount - (this.state.answers.length - this.state.correctCount)
  },

  setGameFacts () {
    const { totalCount } = this.state
    const numTrue = Math.floor(Math.random() * totalCount)
    const numFalse = totalCount - numTrue

    let facts = this.shuffleArray(factsData.facts).slice(0, numTrue)
      .concat(this.shuffleArray(factsData.lies).slice(0, numFalse))

    this.setState({
      facts: this.shuffleArray(facts),
      numTrue: numTrue
    })
  },

  onAnswer (truth) {
    const { activeFact, answers, correctCount, facts } = this.state
    let count = correctCount
    if (truth === facts[activeFact].truth) count = correctCount + 1

    this.setState({
      answers: answers.concat(truth),
      correctCount: count,
      showQuestionResult: true
    })
  },

  nextQuestion () {
    const { activeFact, totalCount} = this.state
    let active = activeFact,
        showGameResult = false

    // If we haven't reached the last question, go to next
    if ((activeFact + 1) < totalCount) {
      active = activeFact + 1
    } else {
      // Otherwise, show final game result
      showGameResult = true
    }

    this.setState({
      showQuestionResult: false,
      showGameResult: showGameResult,
      activeFact: active
    })
  },

  newGame () {
    // Clear game data and generate new facts
    this.setState(this.getEmptyState())
    this.setGameFacts()
  },

  shuffleArray (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  },

  render () {
    var { activeFact,
          answers,
          correctCount,
          facts,
          showQuestionResult,
          showGameResult
        } = this.state

    return (
      <div className='ttr-page'>
        {showGameResult
          ? <GameResult correctCount={correctCount} length={answers.length} intuition={this.getIntuition()} newGame={this.newGame} />
          : showQuestionResult
            ? <QuestionResult fact={facts[activeFact]} answer={answers[activeFact]} nextQuestion={this.nextQuestion} />
            : <Question activeFact={activeFact} fact={facts[activeFact]} submitAnswer={this.onAnswer} />}
        {activeFact > 0 && <IntuitionMeter intuition={this.getIntuition()} length={answers.length} />}
      </div>
    )
  }
})

export default Game
