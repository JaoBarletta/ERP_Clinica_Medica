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
    isvalid(){
        return(this.medication && this.dosage && this.frequency && this.route&& this.duration);
    }
    getSumary(){
        return `Medicação: ${this.medication}, Dose: ${this.dosage}, Frequência: ${this.frequency}, Duração: ${this.duration}`;
    }

    updatePrescription({medication, dosage, frequency, route, duration, notes}){
        if(medication) this.medication = medication;
        if(dosage) this.dosage = dosage;
        if(frequency) this.frequency = frequency;
        if(route) this.route = route;
        if(duration) this.duration = duration;
        if(notes) this.notes = notes;
    }
        isRecent() {
        const now = new Date();
        const diffInMs = now - this.created_at;
        const diffInHours = diffInMs / (1000 * 60 * 60);
        return diffInHours <= 24;
    }

        toJSON() {
        return {
            id: this.id,
            appointment_id: this.appointment_id,
            doctor_id: this.doctor_id,
            patient_id: this.patient_id,
            medication: this.medication,
            dosage: this.dosage,
            frequency: this.frequency,
            route: this.route,
            duration: this.duration,
            notes: this.notes,
            created_at: this.created_at
        };
    }
}

module.exports = Prescription;
