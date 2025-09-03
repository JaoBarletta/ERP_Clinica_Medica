class Patient{
    constructor(id, full_name, cpf, birth_date, phone, email, address){
        this.id = id;
        this.full_name = full_name;
        this.cpf = cpf;
        this.birth_date = birth_date;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}

module.exports = Patient;