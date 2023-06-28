const countCharacter = () => {
  const amountOfCharacters = document.querySelectorAll('.character-card').length;
  const characterScorer = document.getElementById('your-characters__amount');

  characterScorer.innerText = `(${amountOfCharacters})`;
  return amountOfCharacters;
};

export default countCharacter;