import axios from 'axios';

export async function fetchFlights(query){
    const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=${query}`;
    
    const options = {
        method: 'GET',
        url,
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
            'X-RapidAPI-Host':'tripadvisor16.p.rapidapi.com',
        }
    };

    try{
        const response = await axios.request(options);
        return response.data
    }catch(error){
        console.error("Error fetching flights:", error)
        return null;
    }
}