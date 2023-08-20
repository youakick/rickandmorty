import axios from 'axios'

export async function fetchData(id) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchEpisodes(page) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchCharacters(name='') {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
    console.log(response)
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchLocations(page) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`);
    // console.log(response.data.results, 'res')
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchPageWithCharacters(page) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    // console.log(response.data.results, 'res')
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}