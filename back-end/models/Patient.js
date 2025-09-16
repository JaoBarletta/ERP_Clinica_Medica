class Patient {
    constructor(id, full_name, cpf, birth_date, phone, email, address) {
        this.id = id;
        this.full_name = full_name;
        this.cpf = cpf;
        this.birth_date = new Date(birth_date);
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    updateContact(phone, email, address) {
        if (phone) this.phone = phone;
        if (email) this.email = email;
        if (address) this.address = address;
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birth_date.getFullYear();
        const m = today.getMonth() - this.birth_date.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birth_date.getDate())) {
            age--;
        }
        return age;
    }

    hasValidCPF() {
        return this.cpf != null && this.cpf.trim() !== "";
    }

    getSummary() {
        return `Patient ${this.full_name}, CPF: ${this.cpf}, Age: ${this.getAge()} years`;
    }

    toJSON() {
        return {
            id: this.id,
            full_name: this.full_name,
            cpf: this.cpf,
            birth_date: this.birth_date,
            phone: this.phone,
            email: this.email,
            address: this.address
        };
    }

    isValid() {
        return this.id != null && this.full_name != null && this.cpf != null;
    }
}

module.exports = Patient;
