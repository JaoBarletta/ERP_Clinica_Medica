class Exam {
    constructor(id, appointment_id, type, status = "pending", result_url = null, result_text = null) {
        this.id = id;
        this.appointment_id = appointment_id;
        this.type = type;
        this.status = status;
        this.result_url = result_url;
        this.result_text = result_text;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

    addResult(url, text) {
        this.result_url = url;
        this.result_text = text;
        this.status = "completed";
    }

    isCompleted() {
        return this.status === "completed";
    }

    getSummary() {
        return `Exam ${this.type} (ID: ${this.id}) - Status: ${this.status}`;
    }

    toJSON() {
        return {
            id: this.id,
            appointment_id: this.appointment_id,
            type: this.type,
            status: this.status,
            result_url: this.result_url,
            result_text: this.result_text
        };
    }

    isValid() {
        return this.id != null && this.appointment_id != null && this.type != null;
    }
}

module.exports = Exam;
