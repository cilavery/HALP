import React, { Component } from 'react'
import VoiceRecognition from './VoiceRecognition'

export default class DecisionForm extends Component {
  constructor() {
    super()
    this.state = {
      statement: '',
      question: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
      <form onSubmit={this.props.postDecision}>
        <div>
          <input type="text" name="question" placeholder="Should I..." size="35" className="form-style" onChange={this.handleChange} value={this.state.question}/>
        </div>
        <div>
          <button type="submit" className="btn-style">Submit</button>
        </div>
      </form>
    </div>
   )
  }

}
