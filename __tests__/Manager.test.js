const { Manager } = require("../lib/Manager");

describe("testing intern class", () => {
    it("should confirm the creation of a new instance of Employee", () => {
        const user = "mikey";
        const id = 12;
        const email = "wowzers@hotmail.com";
        const role = "Manager";
        const officeNumber = 5;
        const data = {name: user, id: id, email: email, officeNumber: officeNumber};
        const manager = new Manager(data);

        expect(manager.getName()).toEqual(user);
        expect(manager.getId()).toEqual(id);
        expect(manager.getEmail()).toEqual(email);
        expect(manager.getOfficeNumber()).toEqual(officeNumber);
        expect(manager.getRole()).toEqual(role);
    });
});