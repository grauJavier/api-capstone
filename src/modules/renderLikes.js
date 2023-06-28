import { toNumber } from 'lodash';
import { addLike, getLike } from './Config/utils.js';

const renderLikes = async () => {
  const likesArr = await getLike();
  const characterCards = document.querySelectorAll('.character-card');

  characterCards.forEach(async (characterCard) => {
    const characterID = characterCard.querySelector('.character-card__comments-btn').getAttribute('data-id');
    const heartIcon = characterCard.querySelector('i');
    const likeTag = characterCard.querySelector('.character-card__likes span');

    heartIcon.addEventListener('click', () => {
      heartIcon.classList.replace('bi-heart', 'bi-heart-fill');
      const updateLike = toNumber(likeTag.innerText) + 1;
      likeTag.innerText = updateLike;
      addLike(characterID);
      // Refresh like
    });

    for (let i = 0; i < likesArr.length; i += 1) {
      if (likesArr[i].item_id === characterID) {
        likeTag.innerText = likesArr[i].likes;
        break;
      } else {
        likeTag.innerText = 0;
      }
    }
  });
};

export default renderLikes;
