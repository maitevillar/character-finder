const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

const fetchService = () => fetch(ENDPOINT).then(response => response.json())

export default fetchService;