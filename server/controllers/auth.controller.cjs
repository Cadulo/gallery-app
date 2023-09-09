const express = require('express')
const router = express.Router()
const authModel = require('../models/auth.model.cjs')
const { authRequired } = require('../middlewares/validateToken.cjs')
const { validateSchema } = require('../middlewares/validator.middleware.cjs')
const { registerSchema, loginSchema } = require('../schemas/auth.schema.cjs')

router.post('/register', validateSchema(registerSchema), authModel.register);
// Antes de registrarse o logearse valido los datos usando zod, envio el esquema requerido y valido mediante la funcion importada
router.post('/login', validateSchema(loginSchema), authModel.login);

router.post('/logout', authModel.logout);

router.get("/verify", authModel.verifyToken)

router.get('/profile', authRequired, authModel.profile)


module.exports = router;