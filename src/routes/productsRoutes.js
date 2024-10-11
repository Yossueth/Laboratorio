const express = require("express")
const router = express.Router()
const productsController = require ("../controllers/productsController")

// router.get("/", productsController.getProducts)
router.post("/",productsController.addProduct)
// router.delete("/:id",productsController.deleteProducts)
// router.put("/:id",productsController.updateProduts)

module.exports = router