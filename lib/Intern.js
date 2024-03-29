const { Employee } = require("./Employee");

class Intern extends Employee {
    role = 'Intern';

    constructor(result) {
        super(result);
        ({ school: this.school } = result);
    }

    getSchool() {
        return this.school;
    }
}

module.exports = { Intern };