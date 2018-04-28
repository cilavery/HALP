import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DecisionForm from './DecisionForm'
import Points from './Points'
import {postDecision} from '../store'


class Decision extends Component {
  render() {
    return (
      <div>
        {
          !this.props.decision.question
          ? <h1>What is your mind grappling with?</h1>
          : <h1>SHOULD I: {this.props.decision.question}</h1>
        }

        {
          !this.props.decision.question
          ? <DecisionForm postDecision={(e) => this.props.loadPostDecision(e)}/>
          : <Points decision={this.props.decision} posPoints={this.props.posPoints} conPoints={this.props.conPoints}/>
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
    }
  }
}

export default Decision = connect(mapStateToProps, mapDispatchToProps)(Decision)
