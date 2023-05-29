const { createHmac } = require("crypto");
// create the hmac with the sha256 algorithm and a secret key

exports.secretHash = (username) => {
  const clientSecret = process.env.ClientSecret;
  const clientId = process.env.ClientId;
  const hasher = createHmac("sha256", clientSecret);

  // add the value we want to hash
  hasher.update(username + clientId);

  // get the hashed value as base64
  let output = hasher.digest("base64");

  return output;
};
