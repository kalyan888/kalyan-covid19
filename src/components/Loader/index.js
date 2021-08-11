import PuffLoader from 'react-spinners/PuffLoader'
import './index.css'

const Loader = props => {
  const {isLoading} = props
  return (
    <div>
      <div className="loader-component">
        <PuffLoader isLoading={isLoading} color="#00BFFF" size={150} />
      </div>
    </div>
  )
}

export default Loader
