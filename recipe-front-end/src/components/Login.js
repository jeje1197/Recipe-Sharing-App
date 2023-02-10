function Login() {

    const sendLoginInfo = (username, password) => {
        // Sends Credentials to Backend for Validation

    }

    return (
        <div style={{height: "80%"}}>
            <h1 className="display-2">Recipe Sharing App</h1>

            <div style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
                }}>

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
        </div>
    );
}

export default Login;