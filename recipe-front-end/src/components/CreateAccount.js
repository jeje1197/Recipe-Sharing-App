import RecipeApi from "../api/RecipeApi";
import { useNavigate } from "react-router-dom";
import './CreateAccount.css';

function CreateAccount(props) {

    const navigate = useNavigate();

    const add = async (first, last, username, pw, cpw) => {

        if (first === '' || last === '' || username === '' || pw === '' || cpw === '') {
            alert("All fields must not be blank.");
            return;
        }

        if (pw !== cpw) {
            alert('Passwords DO NOT match. Fix this issue and try again.');
            return;
        }

        const usrdata = {
            id: -1,
            username: username,
            password: pw,
            profilePhoto: null,
            enabled: true,
            role: "ROLE_USER"
        }
        const added = await RecipeApi.addUser(usrdata);
        alert('Account created!');
        props.setToggleLogin(true);
    }

    return (
        <div className="create-div">

            <div className="card create-card" style={{width: "18rem"}}>

                <form>
                    <h5 className="create-header">Create Account</h5>
                    {/* <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div> */}
                    <div className="create-form-group">
                            <label htmlFor="inputFirst">First Name</label>
                            <input type="text" className="form-control" id="inputFirst" placeholder="Enter First Name" required/>
                    </div>

                    <div className="create-form-group">
                            <label htmlFor="inputLast">Last Name</label>
                            <input type="text" className="form-control" id="inputLast" placeholder="Enter Last Name" required/>
                    </div>

                    <div className="create-form-group">
                            <label htmlFor="inputUsername">Username</label>
                            <input type="text" className="form-control" id="inputUsername" placeholder="Enter username" required/>
                    </div>

                    <div className="create-form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" required/>
                    </div>

                    <div className="create-form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" required/>
                    </div>

                    <input type="submit" value="Create!" className="btn btn-primary create-form-button"
                        onClick={ (e) => {
                            add(
                                document.getElementById("inputFirst").value,
                                document.getElementById("inputLast").value,
                                document.getElementById("inputUsername").value,
                                document.getElementById("inputPassword").value,
                                document.getElementById("confirmPassword").value
                                );
                            e.preventDefault();
                    }} />
                    <br/>

                    <span className="link-primary" onClick={() => props.setToggleLogin(true)}>Back</span>

                </form>

            </div>
            {/* <form>
                <fieldset>
                    <legend>Create Account!</legend>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="fname" name="firstName" required /><br/><br/>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lname" name="lastName" required /><br/><br/>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="uname" name="uname" required /><br/><br/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required /><br/><br/>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" id="confirm" name="confirm" required /><br/><br/>
                    <input htmlFor="submit" value="Create!" onClick={ (e) => {
                        createAccount(
                            document.getElementById('uname').value,
                            document.getElementById('password').value,
                            document.getElementById('confirm').value
                        );
                        e.preventDefault();
                    }}/>
                </fieldset>
            </form> */}
        </div>
    );
}
export default CreateAccount;