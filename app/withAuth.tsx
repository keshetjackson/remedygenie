import React from 'react';
import  {AuthContext, useAuth}  from '../app/context/AuthContext';

const withAuth = (Component: React.ComponentType) => {
    const AuthenticatedComponent = (props: any) => {
      return (
        <AuthContext.Provider value={useAuth()}>
          <Component {...props} />
        </AuthContext.Provider>
      );
    }
    
    return AuthenticatedComponent;
  };
  

  export default withAuth;
