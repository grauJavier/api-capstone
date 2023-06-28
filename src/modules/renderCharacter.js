const renderCharacter = async (result) => {
  const characterContainer = document.getElementById('your-characters__cards');
  const characters = result.data;

  characters.forEach((character) => {
    const characterCard = `
    <div class="character-card d-col">
        <h3 class="character-card__title">${character.displayName}</h3>
        <div class="character-card__container d-col g-05">
            <img class="character-card__snapshot w-100" src="${character.fullPortrait}" style="background-image: url(${character.background})"/>
            <p class="character-card__likes ta-end"><i class="bi bi-heart"></i> <span></span></p>
            <button type="button" class="character-card__comments-btn ta-center w-100" id="agent-card__open-comments-btn" data-id="${character.uuid}">COMMENTS</button>
        </div>
    </div>`;
    characterContainer.insertAdjacentHTML('beforeend', characterCard);
  });
};
export default renderCharacter;
