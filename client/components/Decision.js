import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DecisionForm from './DecisionForm'
import Points from './Points'
import {postDecision} from '../store'


class Decision extends Component {
  constructor() {
    super()

  }

  render() {

    return (
      <div>
        {
          !this.props.decision.question
          ? <h1>What is your mind grappling with?</h1>
          : <h1>Decide: {this.props.decision.question}</h1>
        }

        {
          !this.props.decision.question
          ? <DecisionForm postDecision={(e) => this.props.loadPostDecision(e)}/>
          : <Points />
        }

      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    decision: state.decision
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
    }
  }
}

export default Decision = connect(mapStateToProps, mapDispatchToProps)(Decision)
