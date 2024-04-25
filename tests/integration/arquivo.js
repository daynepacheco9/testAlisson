const request = require('supertest');
const app = require('./app');
// Mockando as funções
jest.mock('../../models/User', () => ({
    find: jest.fn()
}));
describe('GET /users/:userId', () => { beforeEach(() => {
    User.find.mockResolvedValue([
            { _id: '1', name: 'Queila', lastname: 'Lima', salary: 1234 },
            { _id: '2', name: 'Alisson', lastname: 'Ferro', salary: 1234 },
            { _id: '3', name: 'Dom', lastname: 'Ramalho', salary: 1234 },
        ]);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('Deve retornar um array com 3 elementos', async () => {
        const res = await request(app).get('/api/user');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(3);
    });
});