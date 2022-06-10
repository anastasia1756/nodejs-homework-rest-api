const { Contact } = require("../../models");
const { favoriteJoiSchema } = require("../../models/contact");

const updateStatusContact = async (req, res) => {
  const { error } = favoriteJoiSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }

  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
  );
  if (!result) {
    throw new Error(`Contact with id=${contactId} not found`);
  }
  res.json({ status: "success", code: 200, data: { result } });
};

module.exports = updateStatusContact;
