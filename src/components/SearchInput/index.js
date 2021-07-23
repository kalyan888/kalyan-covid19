import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class SearchInput extends Component {
  getCamelCase = stateList => ({
    stateCode: stateList.state_code,
    stateName: stateList.state_name,
  })

  render() {
    const {searchedList} = this.props
    const {stateCode, stateName} = this.getCamelCase(searchedList)
    return (
      <Link className="search-link" to={`/state/${stateCode}`}>
        <li className="search-suggestion">
          <p className="search-suggestion-name">{stateName}</p>
          <div className="state-code-container">
            <p className="state-code">{stateCode}</p>
            <img
              src="https://res.cloudinary.com/covid-dashboard/image/upload/v1626267706/Covid19/search-suggestion-arrow-icon_yelvnl.png"
              className="search-suggestion-icon"
              alt={stateCode}
            />
          </div>
        </li>
      </Link>
    )
  }
}

export default SearchInput
