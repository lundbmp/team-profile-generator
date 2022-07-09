const { Employee } = require("./Employee");

class Manager extends Employee {
    role = 'Manager';

    constructor(result) {
        super(result);
        ({ officeNumber: this.officeNumber } = result);
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
}

module.exports = { Manager };