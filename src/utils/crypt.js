const crypto = require("crypto");

const algorithm = "aes-256-ctr";
const secreteKey = process.env.SECRET_CRYPTO;

const iv = crypto.randomBytes(16);

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, secreteKey, iv);

  const encrypted = Buffer.concat([
    cipher.update(text.toString()),
    cipher.final(),
  ]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
};
const decrypt = (hash) => {
  const [newIv, text] = hash.split(":");

  const decipher = crypto.createDecipheriv(
    algorithm,
    secreteKey,
    Buffer.from(newIv, "hex")
  );
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(text, "hex")),
    decipher.final(),
  ]);
  return decrypted.toString();
};

module.exports = {
  encrypt,
  decrypt,
};
