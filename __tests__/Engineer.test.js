const { Engineer } = require("../lib/Engineer");

describe("testing Engineer class", () => {
    it("should confirm the creation of a new instance of Employee", () => {
        const user = "mikey";
        const id = 12;
        const email = "wowzers@hotmail.com";
        const role = "Engineer";
        const github = "lundbmp";
        const data = {name: user, id: id, email: email, github: github,};
        const engineer = new Engineer(data);

        expect(engineer.getName()).toEqual(user);
        expect(engineer.getId()).toEqual(id);
        expect(engineer.getEmail()).toEqual(email);
        expect(engineer.getGitHub()).toEqual(github);
        expect(engineer.getRole()).toEqual(role);
    });
});