class Doctor {
    constructor(id, full_name, crm, specialty, user_id) {
        this.id = id;
        this.full_name = full_name;
        this.crm = crm;
        this.specialty = specialty;
        this.user_id = user_id;
    }

    updateSpecialty(newSpecialty) {
        this.specialty = newSpecialty;
    }

    updateName(newName) {
        this.full_name = newName;
    }

    hasValidCRM() {
        return this.crm != null && this.crm.trim() !== "";
    }

    getSummary() {
        return `Dr(a). ${this.full_name} - CRM: ${this.crm}, Especialidade: ${this.specialty}`;
    }

    toJSON() {
        return {
            id: this.id,
            full_name: this.full_name,
            crm: this.crm,
            specialty: this.specialty,
            user_id: this.user_id
        };
    }

    isValid() {
        return this.id != null && this.full_name != null && this.crm != null;
    }
}

module.exports = Doctor;
