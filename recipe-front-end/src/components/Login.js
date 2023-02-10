function Login() {

    return (
        <form>
            <div className="form-group">
                <label for="inputUsername">Username</label>
                <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username"/>
            </div>
            <div className="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
}

export default Login;