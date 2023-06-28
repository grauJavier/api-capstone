import { postComment, renderAgentDescription, renderComments } from './Config/utils.js';

const modal = document.getElementById('agent-modal');
const form = document.getElementById('agent-modal__comment-form');
const submitCommentBtn = document.getElementById('agent-modal__comment-btn');

const showModal = (id) => {
  modal.style.display = 'block';
  renderAgentDescription(id);
  renderComments(id);
  submitCommentBtn.setAttribute('data-id', `${id}`);
};

const closeModal = () => {
  modal.style.display = 'none';
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('agent-modal__name').value;
  const userComment = document.getElementById('agent-modal__comment').value;
  await postComment({
    item_id: submitCommentBtn.dataset.id,
    username: name,
    comment: userComment,
  });
  name.value = '';
  userComment.value = '';
});

export { showModal, closeModal };