const { validateClient, validateUser } = require("../helper/signupHelper");
const crypto = require("crypto");
const { cognitoISP } = require("../helper/aws-client");
const { secretHash } = require("../helper/createSecretHash");
exports.get = async (req, res, next) => {
  try {
    res.send("Hello world");
  } catch (err) {
    return next(new Error(err.message));
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const clientId = process.env.ClientId;

    const hash = secretHash(username);
    cognitoISP.signUp(
      {
        SecretHash: hash,
        ClientId: clientId,
        Password: password,
        Username: email,
        UserAttributes: [
          {
            Name: "email",
            Value: email,
          },
          {
            Name: "name",
            Value: username,
          },
        ],
      },
      (err, data) => {
        if (err) return next(new Error(err.message));
        console.log(data);
      }
    );

    res.send("Hello world");
  } catch (err) {
    return next(new Error(err.message));
  }
};
