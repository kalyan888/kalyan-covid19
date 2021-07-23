import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-image"
      src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625850922/Covid19/not-found_poyqy6.png"
      alt="not-found-img"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-desc">
      we’re sorry, the page you requested could not be found, Please go back to
      the homepage
    </p>
    <Link className="home-btn" to="/">
      Home
    </Link>
  </div>
)
export default NotFound
