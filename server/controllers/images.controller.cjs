const express = require('express')
const router = express.Router()
const imageModel = require('../models/image.model.cjs')
const { authRequired } = require('../middlewares/validateToken.cjs')

router.post("/saveImage" ,authRequired, imageModel.saveImage)

router.get("/getImages",authRequired, imageModel.getImages)

router.delete("/deleteImage/:id",authRequired, imageModel.deleteImage)

module.exports = router;