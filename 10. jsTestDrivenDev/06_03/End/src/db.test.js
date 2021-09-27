import { expect } from 'chai';
import { getUserByUsername } from './db';
import { getDatabaseData, setDatabaseData, resetDatabase } from './test-helpers';

describe('getUserByUsername', () => {
    afterEach('reset the database', async () => {
        await resetDatabase();
    });

    it('get the correct user from the database given a username', async () => {
        const fakeData = [{
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        }, {
            id: '124',
            username: 'wrong',
            email: 'wrong@wrong.com',
        }];

        await setDatabaseData('users', fakeData);

        const actual = await getUserByUsername('abc');
        const finalDBState = await getDatabaseData('users');

        const expected = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        };

        expect(actual).excludingEvery('_id').to.deep.equal(expected);
        expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);
    });
});