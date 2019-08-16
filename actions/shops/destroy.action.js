const Shop = require("../../models/shop.model")

class DeleteShop {
    constructor(id) {
        this.id = id
    }

    async delete() {
        try {
            let query = await Shop.findOneAndDelete({
                _id: this.id
            }).exec()
            
            return query
        } catch (err) {
        throw err
        }
    }
}

module.exports = DeleteShop