const express = require("express");
const { contacts: ctrl } = require("../../controllers");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactsSchema } = require("../../schemas");

const validateMiddlewars = validation(contactsSchema);
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddlewars, ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", validateMiddlewars, ctrlWrapper(ctrl.updateById));

module.exports = router;
