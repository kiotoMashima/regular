import app from '../Validator';

test('should validate valid usernames', () => {
    const validUsernames = [
     "user_name123",
     "user-name",
     "username123",
     "user123name"
    ];

    validUsernames.forEach(username => {
     expect(validator.validateUsername(username)).toBe(true);
    });
});

test('should invalidate invalid usernames', () => {
    const invalidUsernames = [
     "123username", 
     "username123_",
     "user__name", 
     "user1234name" 
    ];

    invalidUsernames.forEach(username => {
     expect(validator.validateUsername(username)).toBe(false);
    });
});