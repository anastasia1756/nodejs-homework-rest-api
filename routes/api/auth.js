const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { users: ctrl, currentUsers } = require("../../controllers");
const { joiSignupSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get("/current", auth, ctrlWrapper(currentUsers.getCurrent));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
