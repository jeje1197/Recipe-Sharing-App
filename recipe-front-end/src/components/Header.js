import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
    const logout = () => {
        props.setUserData({})
        props.setLoggedIn(false)
    }

    return (
            <div className="recipe-app-header">
                <h1 className="display-2 recipe-app-header-text">Recipe Sharing App</h1>
                {
                    props.loggedIn ? (
                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="container-fluid">

                                <Link className="navbar-brand recipe-app-navbar-text1" to="/">Home</Link>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">

                                        <Link className="nav-link recipe-app-navbar-text2" to="/add">Add Recipe</Link>

                                        <Link className="nav-link recipe-app-navbar-text2" to="/myrecipes">My Recipes</Link>

                                        <Link className="nav-link recipe-app-navbar-text2" to="/" onClick={logout}>Logout</Link>
                                    </div>
                                </div>
                                {/* { props.loggedIn ?
                                    <button className="btn btn-primary" 
                                    onClick={logout}
                                    >
                                        Logout
                                    </button> : null
                                } */}
                                
                            </div>
                            {/* <form class="form-inline" style={{display: 'flex', flexDirection: 'row'}}>
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form> */}
                        </nav>
                    ) : null
                }
                

            </div>
    );
};

export default Header;