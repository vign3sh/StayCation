import logo from './loading.gif'
import './loading.css';
const LoadingScreen = () => {
    return (
        <>
        <div className="container">
        <div className="phone-only">
        <h1>Please wait, the free server takes about 15 seconds on cold restart</h1>
        </div>
            <img src={logo} alt="loading..." />
        </div>
        </>
    )
}

export default LoadingScreen;