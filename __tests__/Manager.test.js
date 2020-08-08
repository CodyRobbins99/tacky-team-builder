const Manager = require('../lib/Manager');

test('Creates a new manager object', () => {
    const manager = new Manager('Bob','1','bob@bob.usa','2');

    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('bob@bob.usa');
    expect(manager.officeNumber).toBe('2');
});
test("Checks to see if manager's role is 'Manager'", () => {
    const manager = new Manager('Bob','1','bob@bob.usa','2');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})