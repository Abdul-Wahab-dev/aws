const { createHmac } = require("crypto");
// create the hmac with the sha256 algorithm and a secret key

exports.secretHash = (username) => {
  const clientSecret = process.env.ClientSecret;
  const clientId = process.env.ClientId;
  console.log(clientId);
  console.log(clientSecret);
  const hasher = createHmac("sha256", clientSecret);
  const message = username + clientId;
  // add the value we want to hash
  hasher.update(message);

  // get the hashed value as base64
  let output = hasher.digest("base64");

  return output;
};
