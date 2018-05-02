import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPoints} from '../store'
import { VictoryPie, VictoryTooltip, VictoryTransition } from 'victory'

class Results extends Component {

  componentDidMount() {
    this.props.loadAllPoints()
  }

  render() {

    const resultPie = filterData(this.props.allPoints, this.props.decision.id)
    const prosWeight = resultPie[0].y
    const consWeight = resultPie[1].y

    return (
      <div>
        {
          prosWeight > consWeight
          ? <h1>DO IT. YOU SHOULD "{this.props.decision.question}"</h1>
          : <h1>Don't. Just don't "{this.props.decision.question}"</h1>
        }
        <div className="results-links">
          <Link to="/results">Final Result</Link>
          <Link to="/results/pros">Pros</Link>
          <Link to="/results/cons">Cons</Link>
        </div>
        <div className="chart">

          <VictoryPie
            animate={{ duration: 2000 }}
            labelComponent={<VictoryTooltip cornerRadius={1}/>}
            width={200}
            height={200}
            data={resultPie}
            x="x"
            y="y"
            colorScale={["#ffff1a", "#6666ff"]}
            innerRadius={10}
            padding={{top: 5, bottom: 20, left: 30, right: 30 }}
            style={{
              labels: {
                fontSize: 5,
                fill: "black",
                padding: 2
              }
            }}
          />

        </div>
      </div>
    )
  }
}

const filterData = (allData, id) => {
  const data = allData.filter(data => data.decisionId === id)

  const prosWeight = data.filter(p => {
    return p.category === "pro"
    }).reduce((accum, currentVal) => {
    return accum + currentVal.weight
  }, 0)

  const consWeight = data.filter(c => {
    return c.category === "con"
    }).reduce((accum, currentVal) => {
    return accum + currentVal.weight
  }, 0)

  return [ { x: "pros", y: prosWeight }, { x: "cons", y: consWeight }]
}


const mapStateToProps = (state) => {
  return {
    allPoints: state.allPoints,
    decision: state.decision
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadAllPoints: function() {
      dispatch(fetchPoints())
    }
  }
}


export default Results = connect(mapStateToProps, mapDispatchToProps)(Results)
