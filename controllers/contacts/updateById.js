const { Contact } = require("../../models");
const { joiSchema } = require("../../models/contact");

const updateById = async (req, res) => {
  const { error } = joiSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }

  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new Error(`Contact with id=${contactId} not found`);
  }
  res.json({ status: "success", code: 200, data: { result } });
};

module.exports = updateById;
