const contactsOperations = require("../../models/contacts");
// const contactsSchema = require("../../schemas");

const add = async (req, res) => {
  const result = await contactsOperations.addContact(req.body);
  res.status(201).json({ status: "success", code: 201, result });
};

module.exports = add;
