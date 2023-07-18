import axios from 'axios'

export async function fetchData(link, name = "") {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/${link}/?name=${name}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


 