const express = require("express")
const router = express.Router()
const productsControllers = require ("../controllers/productsControllers")

router.get("/", productsControllers.getProducts)
router.get("/:id", productsControllers.getProductsId)
router.post("/", productsControllers.addProduct)
router.delete("/:id",productsControllers.eliminar)
router.put("/:id",productsControllers.editar)


module.exports = router