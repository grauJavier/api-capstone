import './styles.css';
import fetchCharacter from './modules/fetchCharacter.js';
import { showModal, closeModal } from './modules/modal.js';

fetchCharacter();

document.addEventListener('click', (e) => {
  if (e.target.id === 'agent-card__open-comments-btn') {
    showModal(e.target.dataset.id);
  }
  if (e.target.className === 'agent-modal__close-btn') {
    closeModal();
  }
});
