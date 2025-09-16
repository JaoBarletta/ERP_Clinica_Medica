class Bed {
    constructor(id, code, ward, status = "available") {
        this.id = id;
        this.code = code;
        this.ward = ward;
        this.status = status;
        this.patient_id = null;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

    assignPatient(patientId) {
        this.patient_id = patientId;
        this.status = "occupied";
    }

    release() {
        this.patient_id = null;
        this.status = "available";
    }

    transferWard(newWard) {
        this.ward = newWard;
    }

    isAvailable() {
        return this.status === "available";
    }

    getSummary() {
        return `Bed ${this.code}: Ward ${this.ward}, Status ${this.status}, Patient: ${this.patient_id || "N/A"}`;
    }

    toJSON() {
        return {
            id: this.id,
            code: this.code,
            ward: this.ward,
            status: this.status,
            patient_id: this.patient_id
        };
    }

    isValid() {
        return this.id != null && this.code != null && this.ward != null;
    }
}

module.exports = Bed;
