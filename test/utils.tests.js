import {
    renderGame,
    renderTeam
} from '../render-utils.js';

const test = QUnit.test;

test('This should create a div that displays name1 and name2, and score1 and score2', (expect) => {
    const game = {
        name1: 'Fred',
        name2: 'George',
        score1: 1,
        score2: 2
    };
    const expected = '<div class="game"><div><p>Fred</p><p>1</p></div><div><p>George</p><p>2</p></div></div>';
    const actual = renderGame(game).outerHTML;
    // console.log(actual, actual.outerHTML);
    expect.equal(actual, expected);
});

test('This function should return a div with 2 p tags that display team name and score', (expect) => {
    const name = 'Fred';
    const score = 1;
    
    const expected = '<div><p>Fred</p><p>1</p></div>';
    const actual = renderTeam(name, score);
    expect.equal(actual.outerHTML, expected);
});