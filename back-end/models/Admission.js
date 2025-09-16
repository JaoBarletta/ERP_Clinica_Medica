class Admission {
    constructor(id, code, ward, status, admissionDate = new Date()) {
        this.id = id;
        this.code = code;
        this.ward = ward;
        this.status = status;
        this.admissionDate = admissionDate;
        this.dischargeDate = null;
        this.doctor = null;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

    transferWard(newWard) {
        this.ward = newWard;
    }

    discharge() {
        this.status = "discharged";
        this.dischargeDate = new Date();
    }

    assignDoctor(doctor) {
        this.doctor = doctor;
    }

    isActive() {
        return this.status !== "discharged";
    }

    calculateStayDuration() {
        const endDate = this.dischargeDate || new Date();
        const diffTime = endDate - this.admissionDate;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24))
    }

    getSummary() {
        return `Admission ${this.code}: Ward ${this.ward}, Status ${this.status}, Doctor: ${this.doctor || "N/A"}`;
    }

    toJSON() {
        return {
            id: this.id,
            code: this.code,
            ward: this.ward,
            status: this.status,
            admissionDate: this.admissionDate,
            dischargeDate: this.dischargeDate,
            doctor: this.doctor
        };
    }

    isValid() {
        return this.id != null && this.code != null && this.ward != null;
    }
}

module.exports = Admission;
