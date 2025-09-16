class Invoice {
    constructor(id, patient_id, appointment_id, total_amount, payer_type = "INSURANCE", insurer_name = null, status = "PENDING") {
        this.id = id;
        this.patient_id = patient_id;
        this.appointment_id = appointment_id;
        this.total_amount = total_amount;
        this.payer_type = payer_type;
        this.insurer_name = insurer_name;
        this.status = status;
    }

    markAsPaid() {
        this.status = "PAID";
    }

    cancel() {
        this.status = "CANCELLED";
    }

    updateAmount(newAmount) {
        this.total_amount = newAmount;
    }

    isPaid() {
        return this.status === "PAID";
    }

    getSummary() {
        return `Invoice ${this.id}: Patient ${this.patient_id}, Amount: ${this.total_amount}, Status: ${this.status}`;
    }

    toJSON() {
        return {
            id: this.id,
            patient_id: this.patient_id,
            appointment_id: this.appointment_id,
            total_amount: this.total_amount,
            payer_type: this.payer_type,
            insurer_name: this.insurer_name,
            status: this.status
        };
    }

    isValid() {
        return this.id != null && this.patient_id != null && this.total_amount != null;
    }
}

module.exports = Invoice;
