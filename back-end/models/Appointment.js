class Appointement{
    constructor(patient_id, doctor_id, starts_at, ends_at, status, notes){
        this.patient_id = patient_id;
        this.doctor_id = doctor_id;
        this.starts_at = starts_at;
        this.ends_at = ends_at;
        this.status = status;
        this.notes = notes;
    }
}

module.exports = Appointement;