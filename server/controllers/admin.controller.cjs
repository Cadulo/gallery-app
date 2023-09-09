const express = require("express");
const router = express.Router();
const { authRequired } = require("../middlewares/validateToken.cjs");
const adminModel = require("../models/admin.model.cjs");

router.get("/getOrderAdmin", authRequired, adminModel.getOrdersAdmin)

router.put('/orders/:orderId',authRequired, adminModel.updateOrder);

module.exports = router;
