import { MongoClient } from 'mongodb';
import { expect } from 'chai';
import { getUserByUsername } from './db';

describe('getUserByUsername', () => {
    it('get the correct usre from the database given a username', async () => {
        const client = await MongoClient.connect(
            `mongodb://localhost:27017/TEST_DB`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );

        const db = client.db('TEST_DB');

        // tests

        client.close();
    });
});