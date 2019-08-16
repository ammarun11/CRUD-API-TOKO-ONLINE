const express = require('express')
const router = express.Router()
const Shop = require("../actions/shop.action")
const ShowShop = require("../actions/shops/show.action")
const CreateShop = require("../actions/shops/create.action")
const AllShop = require("../actions/shops/getAll.action")
const UpdateShop = require("../actions/shops/update.action")
const DeleteShop = require("../actions/shops/destroy.action")


router.post("/", async (req, res, next) => {
    try {
        let data = await new CreateShop(req).exec()

        return res.status(201).json({
            status: "success",
            data,
            message: "Shop created successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/", async (req, res, next) => {
    try {
        let data = await new AllShop().getAll()

        return res.status(201).json({
            status: "success",
            data,
            message: "Shop created successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.put("/:id", async (req, res, next) => {
    try {   
        let {id} = req.params
        let data = await new UpdateShop(id, req).update()

        return res.status(201).json({
            status: "success",
            data,
            message: "Shop updated successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.delete("/:id", async (req, res, next) => {
    try {   
        let {id} = req.params
        let data = await new DeleteShop(id).delete()

        return res.status(201).json({
            status: "success",
            data,
            message: "Shop updated successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

//Fungsi dengan class static
// router.get("/", async (req, res, next) => {
//     try {
//         let data = await Shop.all()

//         return res.status(200).json({
//             status: "success",
//             data,
//             message: "Get all shop data"
//         })
//     } catch(err) {
//         return res.status(400).json({
//             status: "error",
//             message: err.message
//         })
//     }
// })

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new ShowShop(id).exec()
        console.log(`Type of ShowShop is ${typeof ShowShop}`)

        return res.status(200).json({
            status: "success",
            data,
            message: "Get detail of shop"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router
