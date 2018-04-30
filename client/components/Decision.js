import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DecisionForm from './DecisionForm'
import Points from './Points'
import {postDecision} from '../store'
import {VoicePlayer,VoiceRecognition} from 'react-voice-components'


class Decision extends Component {
  constructor() {
    super()
    this.state = {
      start: false,
      stop: false
    }
  }

  onEnd = () => {
    this.setState({ start: false, stop: false })
    this.props.action('end')()
  }

  onResult = ({ finalTranscript }) => {
    const result = finalTranscript
    this.setState({ start: false })
    this.props.action('result')(finalTranscript)
  }

  render() {
    return (
      <div>
        {/* <button onClick={() => this.setState({ start: true })}>start</button>
        <button onClick={() => this.setState({ stop: true })}>stop</button> */}
        {this.state.start && (
          <VoiceRecognition
            onStart={this.props.action('start')}
            onEnd={this.props.action('end')}
            onResult={this.onResult}
            continuous={true}
            lang="en-US"
            stop={this.state.stop}
          />
        )}
        <div className="header-question">
        {
          !this.props.decision.question
          ? <h1>What is your mind grappling with?</h1>
          : <h1>{this.props.decision.question}</h1>
        }
        </div>

        {
          !this.props.decision.question
          ? <div className="header-question">
              <DecisionForm postDecision={(e) => this.props.loadPostDecision(e)}/>
              </div>
          : <div className="points-section">
            <Points decision={this.props.decision} posPoints={this.props.posPoints} conPoints={this.props.conPoints}/>
            </div>
        }

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    decision: state.decision,
    posPoints: state.posPoint,
    conPoints: state.conPoint
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPostDecision: function(e) {
      e.preventDefault();
      const body = {
        question: e.target.question.value
      }
      dispatch(postDecision(body))
    },
    action: function(command) {
      dispatch(loadStories())
    }
  }
}

export default Decision = connect(mapStateToProps, mapDispatchToProps)(Decision)
