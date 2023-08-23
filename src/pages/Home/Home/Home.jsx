import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {
                user.displayName
            }
            <h3>I am Home page</h3>
        
        </div>
    );
};

export default Home;