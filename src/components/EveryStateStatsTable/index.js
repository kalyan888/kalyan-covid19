import {Component} from 'react'
import './index.css'

class EveryStateStatsTable extends Component {
  render() {
    const {state, sortedSearchResults, covidData} = this.props

    console.log(sortedSearchResults)

    return (
      <div className="state-count-con">
        <h1 className="state-name">{state.state_name}</h1>
        <p className="state-count confirmed-count">11,24,60,90</p>
        <p className="state-count recovered-count"> 11,24,6 </p>
        <p className="state-count active-count"> 11,24,6</p>
        <p className="state-count deceased-count"> 11,24,60</p>
        <p className="state-count population-count"> 11,24,60 </p>
      </div>
    )
  }
}

export default EveryStateStatsTable
