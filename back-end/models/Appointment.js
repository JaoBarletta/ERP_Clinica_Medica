class Appointment {
    constructor(patient_id, doctor_id, starts_at, ends_at, status = "scheduled", notes = "") {
        this.patient_id = patient_id;
        this.doctor_id = doctor_id;
        this.starts_at = new Date(starts_at);
        this.ends_at = new Date(ends_at);
        this.status = status;
        this.notes = notes;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

    reschedule(newStart, newEnd) {
        this.starts_at = new Date(newStart);
        this.ends_at = new Date(newEnd);
        this.status = "rescheduled";
    }

    cancel() {
        this.status = "canceled";
    }

    complete() {
        this.status = "completed";
    }

    getDuration() {
        const diff = this.ends_at - this.starts_at;
        return Math.floor(diff / (1000 * 60));
    }

    addNotes(extraNotes) {
        this.notes += (this.notes ? " " : "") + extraNotes;
    }

    getSummary() {
        return `Appointment: Patient ${this.patient_id}, Doctor ${this.doctor_id}, ` +
               `Start: ${this.starts_at.toISOString()}, End: ${this.ends_at.toISOString()}, ` +
               `Status: ${this.status}`;
    }

    toJSON() {
        return {
            patient_id: this.patient_id,
            doctor_id: this.doctor_id,
            starts_at: this.starts_at,
            ends_at: this.ends_at,
            status: this.status,
            notes: this.notes
        };
    }

    isValid() {
        return this.patient_id != null &&
               this.doctor_id != null &&
               this.starts_at < this.ends_at;
    }
}

module.exports = Appointment;
