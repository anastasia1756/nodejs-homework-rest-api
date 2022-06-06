const contactsOperations = require("../../models/contacts");
const contactsSchema = require("../../schemas");

const updateById = async (req, res) => {
  const { error } = contactsSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }

  const { contactId } = req.params;
  const result = await contactsOperations.updateContact(contactId, req.body);
  if (!result) {
    throw new Error(`Contact with id=${contactId} not found`);
  }
  res.json({ status: "success", code: 200, data: { result } });
};

module.exports = updateById;
