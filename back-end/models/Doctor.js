class Doctor {
    constructor(id, full_name, crm, specialty, user_id){
        this.id = id;
        this.full_name = full_name;
        this.crm = crm;
        this.specialty = specialty;
        this.user_id = user_id;
    }
}

module.exports = Doctor;