import counter from '../commentCounter.js';

const characterApi = 'https://valorant-api.com/v1/agents';
const commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/47HBg6Pp1846iMUprtBv/comments';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/47HBg6Pp1846iMUprtBv/likes';

const addLike = async (characterID) => {
  await fetch(likesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: characterID }),
  });
};

const getLike = async () => {
  const response = await fetch(likesUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

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

// eslint-disable-next-line consistent-return
const renderComments = async (id) => {
  try {
    const comments = await getComment(id);
    const commentsList = document.getElementById('agent-modal__comments-list');
    const commentCount = document.getElementById('comments__title');
    commentsList.innerHTML = '';
    comments.forEach((comment) => {
      const date = comment.creation_date;
      commentsList.innerHTML += `
      <li>${date} ${comment.username}: ${comment.comment}</li>
    `;
    });
    commentCount.innerHTML = `Comments(${counter(commentsList)})`;
  } catch (error) {
    return null;
  }
};

const renderAgentDescription = async (id) => {
  const agent = await getAgentsById(id);
  const agentAbilities = agent[0].abilities;
  const agentRole = agent[0].role;
  const agentDescriptionContainer = document.querySelector('.agent-modal__agent-description');
  agentDescriptionContainer.innerHTML = `
  <div id="character-details__body" class="d-row g-1">
    <img id="character-details__portrait" src="${agent[0].displayIcon}" />
    <div class="wrapper d-col g-2">
      <div class="wrapper d-row g-1 ai-center">
        <div class="wrapper d-col g-1">
          <h2>BIO</h2>
          <p id="character-details__description">${agent[0].description}</p>
        </div>
        <div id="character-details__role" class="d-col ta-center ai-center g-05">
          <b>ROLE</b>
          <img id="character-details__role-icon" src="${agentRole.displayIcon}" />
          <b>${agentRole.displayName}</b>
        </div>
      </div>
      <div id="character-details__abilities" class="d-col g-1 jc-center">
        <b>ABILITIES</b>
        <ul id="character-details__abilities-list" class="d-row g-1"></ul>
      </div>
    </div>
  </div>

  <div id="character-details__comments" class="d-col g-1 ai-center">
    <h2 id="comments__title"></h2>
    <div id="comments__list" class="wrapper d-col g-05">
      <ul id="agent-modal__comments-list"></ul>
    </div>
  </div>
  `;
  const characterAbilities = document.getElementById('character-details__abilities-list');
  agentAbilities.forEach((ability) => {
    characterAbilities.innerHTML += `
    <li class="abilities-list__element d-row ai-center g-05">
      <img src="${ability.displayIcon}" />
      <span class="abilities-list__ability-name">${ability.displayName}</span>
    </li>
    `;
  });
};

export {
  renderAgentDescription, getAgentsById, renderComments, postComment, getComment, addLike, getLike,
};
