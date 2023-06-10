import request from 'supertest';
import app from '../..';

describe('API Tests', () => {
  test.skip('POST /register should create a new meal', async () => {
    const newUser = {
      name: 'banana',
      category: 'food',
      stock: 1,
      using:  'true'
    };

    const response = await request(app)
      .post('api/meal/register')
      .send(newUser);

    expect(response.body).not.toBe('');

  });

});
