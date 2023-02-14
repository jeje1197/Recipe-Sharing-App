import RecipeApi from '../api/RecipeApi';
import './Login.css'

function Login(props) {

    const sendLoginInfo = async (username, password) => {
        // Sends Credentials to Backend for Validation
        const userData = await RecipeApi.loginAsUser({
            username, password
        })

        if (!userData) {
            alert("Invalid username or password.")
            return
        }

        // Set state for application userData
        props.setUserData(userData)
        props.setLoggedIn(true)
    }

    return (
        <div className="login-div">
            <div className="card login-card mx-auto">
                <form>
                    <h5 className="card-title login-header">Sign In</h5>

                    <div className="form-group login-form-group">
                        <label htmlFor="inputUsername">Username</label>
                        <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username"/>
                    </div>
                    <div className="form-group login-form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                    
                    <button className="btn btn-primary login-form-button" 
                    onClick={ (event) => { 
                        sendLoginInfo(
                            document.getElementById("inputUsername").value,
                            document.getElementById("inputPassword").value,
                            );
                        event.preventDefault()
                    }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;