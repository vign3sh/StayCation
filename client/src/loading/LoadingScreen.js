import logo from './loading.gif'
import './loading.css';
const LoadingScreen = () => {
    return (
        <>
        <div className="container">
        <div className="phone-only">
        <h1>Please wait while the server is starting</h1>
        </div>
            <img src={logo} alt="loading..." />
        </div>
        </>
    )
}

export default LoadingScreen;