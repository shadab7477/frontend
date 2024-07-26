import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const saveToken = (token) => {
      
        localStorage.setItem('token', token);
        setToken(token);
    };

     const isAuthenticated = () => {
        // In a real application, you'd check authentication status more securely.
        return localStorage.getItem('isAdmin') === 'true';
      };
      
       const login = (username, password) => {
        if (username === 'admin' && password === 'password') {
          localStorage.setItem('isAdmin', 'true');
          return true;
        }
        return false;
      };
      
       const logout = () => {
        localStorage.removeItem('isAdmin');
      };

    const clearToken = () => {
        localStorage.removeItem('token');
        setToken('');
    };

    return (
        <AuthContext.Provider value={{isAuthenticated,login, token, saveToken, clearToken }}>
            {children}
        </AuthContext.Provider>
    );
};
