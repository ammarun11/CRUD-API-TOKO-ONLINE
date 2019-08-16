const Shop = require("../../models/shop.model")

class AllShop {
    constructor(id, name, description, owner) {
        this.id = id,
        this.name = name,
        this.description = description,
        this.owner = owner
    }

    async getAll() {
        try{
            let query = await Shop.find({}).exec()

            return query
        } catch (err){
            throw err
        }
    }

    hello(){
        return 'Hello Shop'
    }
}

module.exports = AllShop