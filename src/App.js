import React, { useEffect, useReducer } from 'react';
import './App.css';
import MyRouter from './components/MyRouter.js';
import NavBar from './components/NavBar.js';
import axios from 'axios';
import { AppContext, initialState } from './store/AppContext.js';
import appReducer from './store/AppReducer.js';

function App() {
    const [app, setApp] = useReducer(appReducer, initialState);

    useEffect(() => {
        const url = 'https://662317a63e17a3ac846e947f.mockapi.io';
        const getDestinations = async () => {
            try {
                const res = await axios.get(`${url}/Travel`);
                setApp({ type: 'loadedCities', payload: res.data });
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error
            }
        };
        getDestinations();
    }, []);

    return (
        <AppContext.Provider value={{ app, setApp }}>
            <div className="App">
                <header className="App-header">
                    <NavBar />
                    <h1>Where should you go Next?</h1>
                </header>
                <main className="App-main">
                    <MyRouter />
                </main>
            </div>
        </AppContext.Provider>
    );
}

export default App;
