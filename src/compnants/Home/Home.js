import React from 'react';
import { useAppContext } from '../../useContext/appContext';
import Header from '../Header/Header';

const Home = () => {
    const { a } = useAppContext()
    console.log("useAppContext", a)
    return (<>
        <Header />
        <div>
            {/* This is Home {newNumber} */}
        </div></>
    );
};

export default Home;