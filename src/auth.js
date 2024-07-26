// auth.js
export const isAuthenticated = () => {
    return localStorage.getItem('isAdmin') === 'true';
  };
  
  export const login = (username, password) => {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('isAdmin');
  };
  