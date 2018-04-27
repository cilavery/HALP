import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default function DecisionForm(props) {

    return (
      <form onSubmit={props.postDecision}>
        <div>
          <input type="text" name="question" placeholder="Should I..." size="35" className="form-style"/>
        </div>
        <div>
          <button type="submit" className="btn-style">Submit</button>
        </div>
      </form>

   )
}
