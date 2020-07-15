import React from 'react';

import { Cards, Chart, CountryPicker } from './Components';
import styles from './App.module.css';


class App extends React.Component {
    render() {
        return (

            <div className={styles.container}>
                <h1>Tasha's COVID-19 Tracker</h1>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;