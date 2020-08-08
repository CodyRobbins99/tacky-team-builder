const Intern = require('../lib/Intern');

test('Creates a new Intern object', () => {
    const intern = new Intern('Bob','1','bob@bob.usa','Bob University');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('bob@bob.usa');
    expect(intern.school).toBe('Bob University');
});
test("Checks to see if interns's role is 'intern'", () => {
    const intern = new Intern('Bob','1','bob@bob.usa','Bob University');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
test("Gets intern's school name", () => {
    const intern = new Intern('Bob','1','bob@bob.usa','Bob University');
    expect(intern.getSchool()).toEqual(expect.stringContaining('Bob University'));
})