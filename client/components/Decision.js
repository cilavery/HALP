import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DecisionForm from './DecisionForm'
import {postDecision} from '../store'


class Decision extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>What do you need to decide?</h1>
        <DecisionForm postDecision={(e) => this.props.loadPostDecision(e)}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log('STATE????', state)
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPostDecision: function(e) {
      const body = {
        question: e.target.question.value
      }
      dispatch(postDecision(body))
    }
  }
}

export default Decision = connect(null, mapDispatchToProps)(Decision)
