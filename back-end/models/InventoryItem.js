class InventoryItem {
    constructor(id, name, sku, unit = "un", min_qty = null, qty = null) {
        this.id = id;
        this.name = name;
        this.sku = sku;
        this.unit = unit;
        this.min_qty = min_qty;
        this.qty = qty;
    }

    updateQty(newQty) {
        this.qty = newQty;
    }

    addStock(amount) {
        this.qty = (this.qty || 0) + amount;
    }

    removeStock(amount) {
        if (this.qty == null) this.qty = 0;
        this.qty = Math.max(0, this.qty - amount);
    }

    isBelowMinimum() {
        if (this.min_qty == null || this.qty == null) return false;
        return this.qty < this.min_qty;
    }

    getSummary() {
        return `Item ${this.name} (SKU: ${this.sku}) - ${this.qty || 0} ${this.unit} em estoque`;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            sku: this.sku,
            unit: this.unit,
            min_qty: this.min_qty,
            qty: this.qty
        };
    }

    isValid() {
        return this.id != null && this.name != null && this.sku != null;
    }
}

module.exports = InventoryItem;
