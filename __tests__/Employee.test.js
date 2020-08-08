const Employee = require('../lib/Employee');

test('Creates a new employee object', () => {
    const employee = new Employee('Bob','1','bob@bob.usa');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('bob@bob.usa');

});
test("Gets employee's name", () => {
    const employee = new Employee('Bob','1','bob@bob.usa');

    expect(employee.getName()).toEqual(expect.stringContaining('Bob'));
});
test("Gets employee's id", () => {
    const employee = new Employee('Bob','1','bob@bob.usa');

    expect(employee.getId()).toEqual(expect.stringContaining('1'));
})
test("Gets employee's email", () => {
    const employee = new Employee('Bob','1','bob@bob.usa');

    expect(employee.getEmail()).toEqual(expect.stringContaining('bob@bob.usa'));
})
test("Gets employee's role", () => {
    const employee = new Employee('Bob','1','bob@bob.usa');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})