import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default function DecisionForm(props) {
    return (
      <form onSubmit={props.postDecision}>
        <div>
          <input type="text" name="question" placeholder="Should I..." size="80"/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

   )
}
