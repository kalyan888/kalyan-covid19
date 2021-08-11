import './index.css'

const StateStatsContainer = props => {
  const {
    stateData,
    updateConfirm,
    updateActive,
    updateRecovered,
    updateDeceased,
  } = props

  const onClickConfirm = () => {
    updateConfirm('confirmed')
  }

  const onClickActive = () => {
    updateActive('active')
  }

  const onClickRecovered = () => {
    updateRecovered('recovered')
  }

  const onClickDeceased = () => {
    updateDeceased('deceased')
  }
  return (
    <div className="district-stats-container">
      <div className="confirmed-active-container">
        <div
          className="card-red stats-card"
          role="button"
          tabIndex={0}
          onClick={onClickConfirm}
        >
          <h1 className="card-name">Confirmed</h1>
          <img
            alt="confirmed-img"
            className="stats-image"
            src="https://res.cloudinary.com/dltxupvq4/image/upload/v1625813673/Group_zzsqax.png"
          />
          <h1 className="count">{stateData.total.confirmed}</h1>
        </div>

        <div
          className="card-blue stats-card"
          role="button"
          tabIndex={-1}
          onClick={onClickActive}
        >
          <h1 className="card-name">Active</h1>
          <img
            alt="active-img"
            className="stats-image"
            src="https://res.cloudinary.com/dltxupvq4/image/upload/v1625813957/protection_1_a1ttda.png"
          />
          <h1 className="count">
            {`${stateData.total.confirmed}` -
              `${stateData.total.recovered}` -
              `${stateData.total.deceased}`}
          </h1>
        </div>
      </div>

      <div
        className="recovered-deceased-container"
        role="button"
        tabIndex={-2}
        onClick={onClickRecovered}
      >
        <div className="card-green stats-card">
          <h1 className="card-name">Recovered</h1>
          <img
            alt="recovered-img"
            className="stats-image"
            src="https://res.cloudinary.com/dltxupvq4/image/upload/v1625814036/Vector_2_ie7swu.png"
          />
          <h1 className="count">{stateData.total.recovered}</h1>
        </div>

        <div
          className="card-grey stats-card"
          role="button"
          tabIndex={-3}
          onClick={onClickDeceased}
        >
          <h1 className="card-name">Deceased</h1>
          <img
            alt="deceased-img"
            className="stats-image"
            src="https://res.cloudinary.com/dltxupvq4/image/upload/v1625814066/breathing_1_krebgf.png"
          />
          <h1 className="count">{stateData.total.deceased}</h1>
        </div>
      </div>
    </div>
  )
}

export default StateStatsContainer
