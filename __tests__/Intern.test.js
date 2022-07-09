const { Intern } = require("../lib/Intern");

describe("testing intern class", () => {
    it("should confirm the creation of a new instance of Employee", () => {
        const user = "mikey";
        const id = 12;
        const email = "wowzers@hotmail.com";
        const role = "Intern";
        const school = "NHCC";
        const data = {name: user, id: id, email: email, school: school};
        const intern = new Intern(data);

        expect(intern.getName()).toEqual(user);
        expect(intern.getId()).toEqual(id);
        expect(intern.getEmail()).toEqual(email);
        expect(intern.getSchool()).toEqual(school);
        expect(intern.getRole()).toEqual(role);
    });
});