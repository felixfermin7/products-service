import request from 'supertest';
import app from '../app'; // Import the Express app

describe('POST /api/list-products', () => {
  it('should return products for valid IDs', async () => {
    const response = await request(app)
      .post('/api/list-products')
      .send({ ids: [1, 2] });

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      expect.objectContaining({ id: 1 }),
      expect.objectContaining({ id: 2 }),
    ]);
  });

  it('should return 400 for invalid request body', async () => {
    const response = await request(app)
      .post('/api/list-products')
      .send({ ids: 'invalid' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: '"ids" must be an array.',
    });
  });
});