/**
 * @jest-environment jsdom
 */

import countCharacter from '../modules/countCharacter.js';

describe('TESTING: countCharacter()', () => {
  test('Test approved', () => {
    document.body.innerHTML = `
            <div id="your-characters__container">
                <div id="your-characters__title-wrapper">
                <h1 id="your-characters__title">YOUR AGENTS<span id="your-characters__amount"></span></h1>
            </div>
            <div id="your-characters__cards">
                <div class="character-card"></div>
                <div class="character-card"></div>
                <div class="character-card"></div>
            </div>`;

    const TEST_RESULT = countCharacter();

    expect(TEST_RESULT).toBe(3);
  });
});
