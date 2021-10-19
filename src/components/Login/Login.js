import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useFirebase from "../hooks/useFirebase";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = () => {
    const {
        handleGoogleLogin,
        handleGithubLogin,
        handleUserLogin,
        error
    } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    console.log(error)

    const handleLogin = () => {
        handleUserLogin(email, password);
    };

    return (
        <div id="login" className="py-4 py-sm-5 page-signin">
            <Container>
                <div className="card card-body p-4 p-md-5">
                    {error &&
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    }
                    <Row>
                        <Col md={5} xl={4} className="d-flex align-items-center justify-content-center mb-3 mb-md-0">
                            <svg className="w-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 -11 512 512">
                                <path fill="#3F3F3F" d="M192 213.332031c-58.816406 0-106.667969-47.847656-106.667969-106.664062C85.332031 47.851562 133.183594 0 192 0s106.667969 47.851562 106.667969 106.667969c0 58.816406-47.851563 106.664062-106.667969 106.664062zM192 32c-41.171875 0-74.667969 33.492188-74.667969 74.667969 0 41.171875 33.496094 74.664062 74.667969 74.664062s74.667969-33.492187 74.667969-74.664062C266.667969 65.492188 233.171875 32 192 32zm0 0M266.667969 448H16c-8.832031 0-16-7.167969-16-16v-74.667969C0 301.460938 45.460938 256 101.332031 256H288c17.835938 0 35.390625 4.714844 50.753906 13.652344 7.636719 4.4375 10.214844 14.230468 5.78125 21.867187-4.4375 7.660157-14.230468 10.21875-21.890625 5.78125C312.171875 291.222656 300.179688 288 288 288H101.332031C63.105469 288 32 319.105469 32 357.332031V416h234.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                                <path fill="#FEB019" d="M453.332031 373.332031h-74.664062c-8.832031 0-16-7.167969-16-16v-48C362.667969 279.9375 386.601562 256 416 256s53.332031 23.9375 53.332031 53.332031v48c0 8.832031-7.167969 16-16 16zm-58.664062-32h42.664062v-32C437.332031 297.578125 427.753906 288 416 288s-21.332031 9.578125-21.332031 21.332031zm0 0" />
                                <path fill="#FEB019" d="M474.667969 490.667969H357.332031C336.746094 490.667969 320 473.921875 320 453.332031v-74.664062c0-20.589844 16.746094-37.335938 37.332031-37.335938h117.335938c20.585937 0 37.332031 16.746094 37.332031 37.335938v74.664062c0 20.589844-16.746094 37.335938-37.332031 37.335938zM357.332031 373.332031c-2.941406 0-5.332031 2.390625-5.332031 5.335938v74.664062c0 2.945313 2.390625 5.335938 5.332031 5.335938h117.335938c2.941406 0 5.332031-2.390625 5.332031-5.335938v-74.664062c0-2.945313-2.390625-5.335938-5.332031-5.335938zm0 0" />
                            </svg>
                        </Col>
                        <Col md={7} xl={8}>
                            <h3>Login to your Account</h3>
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onChange={hanldeEmail} type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={hanldePassword} type="password" name="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>

                                <Button onClick={handleLogin} variant="primary" type="submit">
                                    Sign In
                                </Button>
                                <div className="col-xs-12 col-sm-12 col-md-12 mt-3">
                                    <p><a href="password_reset_email.html">Forgot Password</a></p>
                                    <p>Don't have an account?<Link className="ms-2" to="/signup">Create account</Link></p>
                                </div>
                                <div className="login-btn mt-4">
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn btn-warning mr-3"
                                    >
                                        Sign In With Google
                                    </button>
                                    <button onClick={handleGithubLogin} className="btn btn-dark m-2">
                                        <FontAwesomeIcon icon="coffee" /> Sign In With Github
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Login;
