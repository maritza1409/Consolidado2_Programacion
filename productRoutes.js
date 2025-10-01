const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/productController");

router.post("/", productCtrl.create);
router.get("/", productCtrl.readAll);
router.put("/:id", productCtrl.update);
router.delete("/:id", productCtrl.remove);

module.exports = router;

