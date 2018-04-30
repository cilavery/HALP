import React, { Component } from 'react'
import VoiceRecognition from './VoiceRecognition'

export default class DecisionForm extends Component {
  constructor() {
    super()
    this.state = {
      start: false,
      stop: false,
      statement: ''
    }
  }

  onEnd = () => {
    this.setState({ start: false, stop: false })
  }

  onResult = ({ finalTranscript }) => {
    const result = finalTranscript
    this.setState({
      start: false,
      statement: finalTranscript
    })
  }

  render () {

    return (
    <div>
      <button onClick={() => this.setState({ start: true })}>start</button>
      <button onClick={() => this.setState({ stop: true })}>stop</button>
        {this.state.start && (
          <VoiceRecognition
            onResult={this.onResult}
            continuous={true}
            lang="en-US"
            stop={this.state.stop}
          />
        )}
      <form onSubmit={this.props.postDecision}>
        <div>
          <input type="text" name="question" placeholder="Should I..." size="35" className="form-style" value={this.state.statement}/>
        </div>
        <div>
          <button type="submit" className="btn-style">Submit</button>
        </div>
      </form>
    </div>
   )
  }

}
