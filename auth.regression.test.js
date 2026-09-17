const { login } = require('./auth');

describe('Regression Tests - Login', () => {

    test('Login with wrong password should return false', () => {
        expect(login('admin', '456')).toBe(false);
    });

    test('Login with empty username should return false', () => {
        expect(login('', '123')).toBe(false);
    });

    test('Login with special characters in password should return false', () => {
        expect(login('admin', '12@3')).toBe(false);
    });

    test('Login with locked account should return false', () => {
        expect(login('locked', '123')).toBe(false);
    });

});
