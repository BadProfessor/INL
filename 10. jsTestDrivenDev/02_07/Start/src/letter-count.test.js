import { expect } from 'chai';
import { getLetterCount } from './letter-count';

describe('getLetterCount - basic functionality', () => {
    it('returns an empty object when passed an empty string', () => {
        const expected = {};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected);
    });

    it('return the correct letter count for a word with only one of each letter', () => {
        const expected = { c: 1, a: 1, t: 1 };
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected);
    })
})