const characterApi = 'https://valorant-api.com/v1/agents';
const commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/47HBg6Pp1846iMUprtBv/comments';

const getAgentsById = async (id) => {
  const response = await fetch(characterApi);
  const result = await response.json();
  const agents = result.data;
  const agent = agents.filter((agent) => agent.uuid === id);
  return agent;
};

const postComment = async (comment) => {
  const response = await fetch(commentsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  const data = await response.json();
  const { result } = data;
  return result;
};

const getComment = async (id) => {
  const response = await fetch(`${commentsUrl}?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

const counter = (data) => (data.length ? data.length : 0);

// eslint-disable-next-line consistent-return
const renderComments = async (id) => {
  try {
    const comments = await getComment(id);
    const commentsList = document.getElementById('agent-modal__comments-list');
    const commentCount = document.getElementById('comments__title');
    commentCount.innerHTML = `Comments(${counter(comments)})`;
    commentsList.innerHTML = '';
    comments.forEach((comment) => {
      const date = comment.creation_date;
      commentsList.innerHTML += `
      <li>${date} ${comment.username}: ${comment.comment}</li>
    `;
    });
  } catch (error) {
    return null;
  }
};

export {
  getAgentsById, renderComments, postComment, getComment,
};