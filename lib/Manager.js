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
}

module.exports = { Manager };