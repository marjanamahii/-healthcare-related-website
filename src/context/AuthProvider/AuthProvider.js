import React, { createContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const { isLoading } = useFirebase();
    if (isLoading) {
        return <Spinner animation="grow" variant="primary" />;
    }
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
