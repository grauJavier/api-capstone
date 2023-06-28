import renderCharacter from './renderCharacter.js';

const characterApi = 'https://valorant-api.com/v1/agents';
const fetchCharacter = async () => {
  const response = await fetch(characterApi);
  const data = await response.json();
  renderCharacter(data);
};
export default fetchCharacter;