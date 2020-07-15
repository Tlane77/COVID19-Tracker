




// Here we make functions to fetch the data we need
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

// A new way of writing a then statement (and calling it in-line)
export const fetchData = async () => {
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);

        // Taking only the parts of data we need (old way below)
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate,
        //     }
        return { confirmed, recovered, deaths, lastUpdate, };

        } catch (error) {
    
    }
}
