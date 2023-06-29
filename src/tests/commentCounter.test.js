/**
 * @jest-environment jsdom
*/

import counter from '../modules/commentCounter.js';

test('count number of comments', () => {
  document.body.innerHTML = `
    <ul id="comment-list">
      <li>Comment 1</li>
      <li>Comment 1</li>
      <li>Comment 1</li>
      <li>Comment 1</li>
    </ul>
  `;
  const commentsList = document.getElementById('comment-list');
  const mockItemsLength = counter(commentsList);
  expect(mockItemsLength).toBe(4);
});