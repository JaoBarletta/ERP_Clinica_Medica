class Invoice {
    constructor(id, patient_id, appointment_id, total_amount, payer_type = "INSURANCE", insurer_name, status = "PENDING") {
        this.id = id;
        this.patient_id = patient_id;
        this.appointment_id = appointment_id;
        this.total_amount = total_amount;
        this.payer_type = payer_type;
        this.insurer_name = insurer_name;
        this.status = status;
    }
}

module.exports = Invoice;