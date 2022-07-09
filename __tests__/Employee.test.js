const { Employee } = require("../lib/Employee");

describe("testing employee class", () => {
    it("should confirm the creation of a new instance of Employee", () => {
        const user = "mikey";
        const id = 12;
        const email = "wowzers@hotmail.com";
        const role = "Employee";
        const data = {name: user, id: id, email: email};
        const employee = new Employee(data);

        expect(employee.getName()).toEqual(user);
        expect(employee.getId()).toEqual(id);
        expect(employee.getEmail()).toEqual(email);
        expect(employee.getRole()).toEqual(role);
    });
});