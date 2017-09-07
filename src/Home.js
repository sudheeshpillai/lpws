import React from 'react';
import './home.css';

const Home = ({ username }) => {
    return (
        <div className='welcome-message'>
            Welcome {username}
        </div>
    );
}

export default Home;