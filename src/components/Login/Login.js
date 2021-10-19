import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input type="password" name="" id="" placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>New to our website?<Link to="/register">Create an account</Link></p>
            <div>---------or---------</div>
            <button
                className="btn-warning"
                onClick={signInUsingGoogle}
            >Google Sign In</button>
        </div>
    );
};

export default Login;