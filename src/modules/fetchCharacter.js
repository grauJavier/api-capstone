import renderCharacter from './renderCharacter.js';

const characterApi = 'https://valorant-api.com/v1/agents';
const fetchCharacter = async () => {
  const response = await fetch(characterApi);
  const data = await response.json();
  console.log(data.data);
  renderCharacter(data);
};
export default fetchCharacter;