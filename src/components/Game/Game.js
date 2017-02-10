import React from 'react'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Question from './Question'
import QuestionResult from './QuestionResult'
import GameResult from './GameResult'
import IntuitionMeter from './IntuitionMeter'
import utils from '../../util/utils'
import factsData from '../../facts.json'
import './Game.css'

class Game extends React.Component {
  constructor (props) {
    super(props)

    this.totalCount = 10

    this.getEmptyState = this.getEmptyState.bind(this)
    this.getIntuition = this.getIntuition.bind(this)
    this.getGameFacts = this.getGameFacts.bind(this)
    this.onAnswer = this.onAnswer.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.newGame = this.newGame.bind(this)

    // Set initial game state
    this.state = Object.assign({}, this.getEmptyState(), this.getGameFacts())
  }

  getEmptyState () {
    return {
      facts: [],
      activeFact: 0,
      answers: [],
      numTrue: 0,
      correctCount: 0,
      showQuestionResult: false,
      showGameResult: false
    }
  }

  getIntuition () {
    // +1 for correct, -1 for incorrect
    // correct minus incorrect
    return this.state.correctCount - (this.state.answers.length - this.state.correctCount)
  }

  getGameFacts () {
    const numTrue = Math.floor(Math.random() * this.totalCount)
    const numFalse = this.totalCount - numTrue

    let facts = utils.shuffleArray(factsData.facts).slice(0, numTrue)
      .concat(utils.shuffleArray(factsData.lies).slice(0, numFalse))

    return {
      facts: utils.shuffleArray(facts),
      numTrue: numTrue
    }
  }

  onAnswer (truth) {
    const { activeFact, answers, correctCount, facts } = this.state
    let count = correctCount
    // Increase correct count if answer is correct
    if (truth === facts[activeFact].truth) count = correctCount + 1

    this.setState({
      answers: answers.concat(truth),
      correctCount: count,
      showQuestionResult: true
    })
  }

  nextQuestion () {
    const { activeFact } = this.state
    let active = activeFact,
        showGameResult = false

    // If we haven't reached the last question, go to next
    if ((activeFact + 1) < this.totalCount) {
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
  }

  newGame () {
    // Clear game data and generate new facts
    this.setState(Object.assign({}, this.getEmptyState(), this.getGameFacts()))
  }

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
        {activeFact > 0 && !showGameResult && <IntuitionMeter intuition={this.getIntuition()} length={answers.length} />}
      </div>
    )
  }
}

export default Game
