const express = require("express");
const router = express.Router();
const controller = require("../../controllers/mongo/ProductController");

router.get("/Product", controller.index);
router.post("/Product", controller.insert);
router.put("/Product", controller.update);
router.delete("/Product", controller.delete);

module.exports = router;