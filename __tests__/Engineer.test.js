const Engineer = require('../lib/Engineer');

test('Creates a new Engineer object', () => {
    const engineer = new Engineer('Bob','1','bob@bob.usa','bobAF');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('bob@bob.usa');
    expect(engineer.github).toBe('bobAF');
});
test("Checks to see if engineers's role is 'Engineer'", () => {
    const engineer = new Engineer('Bob','1','bob@bob.usa','bobAF');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
test("Gets engineer's github username", () => {
    const engineer = new Engineer('Bob','1','bob@bob.usa','bobAF');
    expect(engineer.getGithub()).toEqual(expect.stringContaining('bobAF'));
})