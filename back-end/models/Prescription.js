class Prescription {
    constructor(id, appointment_id, doctor_id, patient_id, medication, dosage, frequency, route, duration, notes, created_at = new Date()) {
        this.id = id;
        this.appointment_id = appointment_id;
        this.doctor_id = doctor_id;
        this.patient_id = patient_id;
        this.medication = medication;
        this.dosage = dosage;
        this.frequency = frequency;
        this.route = route;
        this.duration = duration;
        this.notes = notes;
        this.created_at = created_at;
    }
}

module.exports = Prescription;