import logo from './loading.gif'
import './loading.css';
const LoadingScreen = () => {
    return (
        <div className="container">
      <div className="text">
        Please wait, the free server takes about 15 secs on cold start
      </div>
      <img className="image" src={logo}  alt="loading..." />
    </div>
    
    )
}

export default LoadingScreen;