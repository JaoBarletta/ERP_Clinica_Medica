const bcrypt = require('bcrypt');


class User {
    constructor(id, name, email, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = bcrypt.hash(password, 10);
        this.role = role;
    }


    async verifyPassword(password) {
        const password_hash = await bcrypt.hash(password, 10)
        if (password_hash === this.password) { return true }
        else { return false }
    }


    updateprofile({ name, email, password }) {
        if (name) this.name = name;
        if (email) this.email = email;
        if (this.verifyPassword(password)) this.password = bcrypt.hash(password)
    }

    checkpassword(password) {
        return this.password === password;
    }

    hasrole() {
        return {
            id: this.id,
            name: this.name,
            email: this.email
        };
    }

    promoteTo(newRole) {
        this.role = newRole
    }

}

module.exports = User