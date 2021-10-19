import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useFirebase from "../hooks/useFirebase";
import { Link } from 'react-router-dom';


const SignUp = () => {
    const {
        handleGoogleLogin,
        error,
        handleGithubLogin,
        handleUserRegister,
    } = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    // console.log(email, password);

    const handleRegister = () => {
        handleUserRegister(email, password);
    };
    return (
        <div className="div">
            <div id="login" className="py-4 py-sm-5 page-signin">
                <Container>
                    <div className="card card-body p-4 p-md-5">
                        {error &&
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        }
                        <Row>

                            <Col xl={4} md={5} className="d-flex align-items-center justify-content-center mb-3 mb-md-0">
                                <svg className="w-50 px-2 px-sm-4 px-md-3 px-xl-4 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="#FEB019" d="M11.894 24c-.131 0-.259-.052-.354-.146-.118-.118-.17-.288-.137-.451l.707-3.535c.02-.098.066-.187.137-.256l7.778-7.778c.584-.584 1.537-.584 2.121 0l1.414 1.414c.585.585.585 1.536 0 2.121l-7.778 7.778c-.069.07-.158.117-.256.137l-3.535.707c-.032.006-.065.009-.097.009zm1.168-3.789l-.53 2.651 2.651-.53 7.671-7.671c.195-.195.195-.512 0-.707L21.44 12.54c-.195-.195-.512-.195-.707 0zm2.367 2.582h.01z" />
                                    <path fill="#3F3F3F" d="M9.5 21h-7C1.121 21 0 19.879 0 18.5v-13C0 4.121 1.121 3 2.5 3h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2C1.673 4 1 4.673 1 5.5v13c0 .827.673 1.5 1.5 1.5h7c.276 0 .5.224.5.5s-.224.5-.5.5zM16.5 12c-.276 0-.5-.224-.5-.5v-6c0-.827-.673-1.5-1.5-1.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2C15.879 3 17 4.121 17 5.5v6c0 .276-.224.5-.5.5z" />
                                    <path fill="#3F3F3F" d="M11.5 6h-6C4.673 6 4 5.327 4 4.5v-2c0-.276.224-.5.5-.5h1.55C6.282.86 7.293 0 8.5 0s2.218.86 2.45 2h1.55c.276 0 .5.224.5.5v2c0 .827-.673 1.5-1.5 1.5zM5 3v1.5c0 .275.225.5.5.5h6c.275 0 .5-.225.5-.5V3h-1.5c-.276 0-.5-.224-.5-.5C10 1.673 9.327 1 8.5 1S7 1.673 7 2.5c0 .276-.224.5-.5.5z" />
                                    <path fill="#FEB019" d="M13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5zM13.5 12h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5zM13.5 15h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                                </svg>
                            </Col>
                            <Col xl={8} md={7}>
                                <div>
                                    <h3 className="title">Let's create your account</h3>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onChange={hanldeEmail} type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={hanldePassword} type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label={<>I agree to the <Link to='/terms-conditions'>Terms and Conditions</Link></>} />
                                    </Form.Group>
                                    <Button onClick={handleRegister} variant="primary" type="submit">
                                        Sign Up
                                    </Button>

                                    <div className="col-xs-12 col-sm-12 col-md-12 mt-3">
                                        <p className="m-0">Already have an account?<Link className="ms-2" to="/signin">Sign In</Link></p>
                                    </div>

                                    <div className="login-btn mt-4">
                                        <button
                                            onClick={handleGoogleLogin}
                                            className="btn btn-warning me-2"
                                        >
                                            Sign In With Google
                                        </button>
                                        <button onClick={handleGithubLogin} className="btn btn-dark m-2">
                                            Sign In With Github
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default SignUp;
