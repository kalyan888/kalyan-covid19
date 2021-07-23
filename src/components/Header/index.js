import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {isIcon: false}

  onClickDropDown = () => {
    this.setState(prevState => ({
      isIcon: !prevState.isIcon,
    }))
  }

  render() {
    const {isIcon} = this.state
    return (
      <nav>
        <div className="header-container">
          <Link to="/" className="link-style">
            <h1 className="title">
              COVID19<span className="india">INDIA</span>
            </h1>
          </Link>

          <div className="portrait">
            <img
              className="icon"
              src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625809670/Covid19/hamburger-icon.png"
              alt="icon"
              onClick={this.onClickDropDown}
            />
          </div>
          <div className="landscape">
            <div className="nav-items-1">
              <Link to="/" className="link-style">
                <h1 className="route-link">Home</h1>
              </Link>
              <Link to="/about" className="link-style">
                <h1 className="route-link">About</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="drop-down">
          <div>
            {isIcon ? (
              <div className="nav-items-2 active">
                <Link to="/" className="link-style">
                  <h1 className="route-link">Home</h1>
                </Link>
                <Link to="/about" className="link-style">
                  <h1 className="route-link">About</h1>
                </Link>
                <img
                  src="https://res.cloudinary.com/covid-dashboard/image/upload/v1626266135/Covid19/nav-close-icon_f4ubcm.png"
                  className="nav-close-icon"
                  alt="close-icon"
                  onClick={this.onClickDropDown}
                />
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    )
  }
}
export default Header
