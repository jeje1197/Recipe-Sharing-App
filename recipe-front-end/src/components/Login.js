import './Login.css'

function Login() {

    const sendLoginInfo = (username, password) => {
        // Sends Credentials to Backend for Validation

    }

    return (
        <div className="recipe-login-div">
            <div className="card" style={{
                width: "18rem", 
                padding: "15px",
                }}>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputUsername">Username</label>
                        <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                    
                    <button className="btn btn-primary" 
                        onClick={ () => { sendLoginInfo() } }>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;