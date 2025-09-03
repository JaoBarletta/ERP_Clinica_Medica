class InventoryItem {
    constructor(id, name, sku, unit = "un", min_qty = null, qty = null) {
        this.id = id;
        this.name = name;
        this.sku = sku;
        this.unit = unit;
        this.min_qty = min_qty;
        this.qty = qty;
    }
}

module.exports = InventoryItem;