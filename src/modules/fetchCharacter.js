import renderCharacter from './renderCharacter.js';
import renderLikes from './renderLikes.js';
import countCharacter from './countCharacter.js';

const characterApi = 'https://valorant-api.com/v1/agents';
const fetchCharacter = async () => {
  const response = await fetch(characterApi);
  const data = await response.json();
  await renderCharacter(data);
  countCharacter();
  renderLikes();
};
export default fetchCharacter;