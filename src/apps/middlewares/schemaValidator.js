const { Validator } = require("jsonschema");

const validator = new Validator();

const schemaValidator = (schema) => (req, res, next) => {
  const result = validator.validate(req.body, schema);
  if (!result.valid) {
    const messageError = [];
    for (const itemError of result.errors) {
      messageError.push(itemError.message.replace('"', "").replace('"', ""));
    }
    res.status(401).send({
      SchemaError: messageError,
    });
  }
  return next();
};

module.exports = schemaValidator;
