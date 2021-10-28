import {Component} from 'react'
import SearchInput from '../SearchInput'
import EveryStateStatsTable from '../EveryStateStatsTable'
import Footer from '../Footer'
import Loader from '../Loader'

import './index.css'

class CovidHome extends Component {
  state = {
    searchInput: '',
    result: {},
    covidData: {},
    isSortedByStates: true,
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const dataUrl = 'https://data.covid19india.org/v4/min/data.min.json'
    const response = await fetch(dataUrl)
    const jsonData = await response.json()
    const sequenceData = this.getSumOfTotalData(jsonData)
    this.updateState(sequenceData, jsonData)
  }

  updateState = (resultData, data) => {
    this.setState({result: resultData, covidData: data, isLoading: false})
  }

  getSumOfTotalData = data => {
    const resultData = {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      active: 0,
      tested: 0,
    }

    Object.keys(data).forEach(eachData => {
      const keyValue = data[eachData]
      const totalValue = keyValue.total
      resultData.confirmed += totalValue.confirmed
      resultData.deceased += totalValue.deceased
      resultData.recovered += totalValue.recovered
      resultData.active =
        resultData.confirmed - resultData.recovered - resultData.deceased
    })
    return resultData
  }

  onChangeSearchTheStates = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSortByStates = () => {
    this.setState({isSortedByStates: true})
  }

  onClickSortByUnion = () => {
    this.setState({isSortedByStates: false})
  }

  render() {
    const {statesList} = this.props
    const {
      searchInput,
      result,
      covidData,
      isSortedByStates,
      isLoading,
    } = this.state

    const searchResults = statesList.filter(eachState =>
      eachState.state_name.toLowerCase().startsWith(searchInput.toLowerCase()),
    )
    const sortedSearchResults = isSortedByStates
      ? statesList.sort()
      : statesList.reverse()
    return (
      <div className="loader">
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          <div className="homepage">
            <div className="search-container">
              <img
                className="icon"
                src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625811891/Covid19/search-icon_to3iog.png"
                alt="icon"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Enter the State"
                onChange={this.onChangeSearchTheStates}
              />
            </div>
            {searchInput === '' ? null : (
              <ul className="search-suggestions">
                {searchResults.map(eachState => (
                  <SearchInput
                    searchedList={eachState}
                    key={eachState.state_code}
                  />
                ))}
              </ul>
            )}
            <div className="stats-container">
              <div className="stat-container-1">
                <div className="stat-container">
                  <p className="stat-name stat-confirmed">Confirmed</p>
                  <img
                    className="stat-icon"
                    src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625813446/Covid19/confirmed-icon_vwfauq.png"
                    alt="confirmed-icon"
                  />
                  <h4 className="stat-count count-confirmed">
                    {result.confirmed}
                  </h4>
                </div>

                <div className="stat-container">
                  <p className="stat-name stat-recovered">Recovered</p>
                  <img
                    className="stat-icon"
                    src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625815299/Covid19/vector-icon_tubmlu.png"
                    alt="active-icon"
                  />
                  <h4 className="stat-count count-recovered">
                    {result.recovered}
                  </h4>
                </div>
              </div>
              <div className="stat-container-2">
                <div className="stat-container">
                  <p className="stat-name stat-active">Active</p>
                  <img
                    className="stat-icon"
                    src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625815230/Covid19/protection-icon_w6qmtr.png"
                    alt="confirmed-icon"
                  />
                  <h4 className="stat-count count-active">{result.active}</h4>
                </div>

                <div className="stat-container">
                  <p className="stat-name stat-deceased">Deceased</p>
                  <img
                    className="stat-icon"
                    src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625815361/Covid19/outline-icon_lrbm0g.png"
                    alt="active-icon"
                  />
                  <h4 className="stat-count count-deceased">
                    {result.deceased}
                  </h4>
                </div>
              </div>
            </div>

            <div className="stat-table-container">
              <div className="stat-table">
                <div className="stat-table-header-container">
                  <div className="sorting-container">
                    <h1 className="stat-table-header">States/UT</h1>
                    <img
                      className="sort-icon"
                      src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625986432/Covid19/sort_icon1_bseblq.png"
                      alt="sort-icon"
                      onClick={this.onClickSortByStates}
                    />
                    <img
                      className="sort-icon"
                      src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625986243/Covid19/sort-icon2_dwyb8r.png"
                      alt="sort-icon"
                      onClick={this.onClickSortByUnion}
                    />
                  </div>
                  <h1 className="stat-table-header">Confirmed</h1>
                  <h1 className="stat-table-header">Active</h1>
                  <h1 className="stat-table-header">Recovered</h1>
                  <h1 className="stat-table-header">Deceased</h1>
                  <h1 className="stat-table-header">Population</h1>
                </div>
                <hr className="table-header-separator" />
              </div>
              <div className="states">
                {sortedSearchResults.map(state => (
                  <EveryStateStatsTable
                    covidData={covidData}
                    state={state}
                    key={state.state_code}
                  />
                ))}
              </div>
            </div>

            <Footer />
          </div>
        )}
      </div>
    )
  }
}

export default CovidHome
