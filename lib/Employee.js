class Employee {
    role = 'Employee';

    constructor(results) {
        ({name: this.name,
        id: this.id,
        email: this.email,
        } = results)
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = { Employee };