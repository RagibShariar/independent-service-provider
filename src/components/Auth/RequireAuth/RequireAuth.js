import React from 'react';

const RequireAuth = () => {
    const [user, loading, error] = useAuthState(auth);
};

export default RequireAuth;