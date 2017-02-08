import React from 'react'

const IntuitionMeter = React.createClass({
  propTypes: {
    intuition: React.PropTypes.number,
    length: React.PropTypes.number
  },

  render () {
    const { intuition, length } = this.props
    var leftPercent = (intuition / (length * 2) * 100) + 50

    return (
      <div className='ttr-game-intuition'>
        <h1 className='ttr-game-intuition-title'>Intuition Meter:</h1>
        <div className='ttr-game-intuition-meter'>
          <span className='ttr-game-intuition-meter-marker' style={{left: `calc(${leftPercent}% - 0.4em`}} />
        </div>
      </div>
    )
  }
})

export default IntuitionMeter
