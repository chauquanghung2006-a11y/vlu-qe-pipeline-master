const { login } = require('./auth');

test('Smoke Test - Login with correct credentials', () => {
    expect(login('admin', '123')).toBe(true);
});
