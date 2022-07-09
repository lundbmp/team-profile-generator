const { Employee } = require("./Employee");

class Engineer extends Employee {
    role = 'Engineer';

    constructor(result) {
        super(result);
        ({ github: this.github } = result);
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = { Engineer };