const { validateClient, validateUser } = require("../helper/signupHelper");
const crypto = require("crypto");
const {
  SignUpCommand,
  ConfirmSignUpCommand,
  InitiateAuthCommand,
  AuthFlowType,
} = require("@aws-sdk/client-cognito-identity-provider");
const { cognitoISP } = require("../helper/aws-client");
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
    const command = new SignUpCommand({
      ClientId: clientId,
      Password: password,
      Username: username,
      UserAttributes: [
        {
          Name: "name",
          Value: username,
        },
        {
          Name: "email",
          Value: email,
        },
      ],
    });

    await cognitoISP.send(command);

    res.send("Hello world");
  } catch (err) {
    return next(new Error(err.message));
  }
};

exports.confirmSignup = async (req, res, next) => {
  try {
    const { code } = req.params;
    const { username } = req.body;

    const command = new ConfirmSignUpCommand({
      ClientId: process.env.ClientId,
      Username: username,
      ConfirmationCode: code,
    });

    await cognitoISP.send(command);

    res.send("Hello");
  } catch (err) {
    next(new Error(err.message));
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const command = new InitiateAuthCommand({
      ClientId: process.env.ClientId,
      AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    });

    const response = await cognitoISP.send(command);
    console.log(response);
    res.send("Login");
  } catch (err) {
    next(new Error(err.message));
  }
};

exports.googleLogin = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const command = new InitiateAuthCommand({
      ClientId: process.env.ClientId,
      AuthFlow: AuthFlowType.USER_SRP_AUTH,
      AuthParameters: {
        AUTH_TYPE: "google",
      },
    });

    const result = await cognitoISP.send(command);
    if (!result) {
      return next(new Error(err.message));
    }
    res.status(200).json(result);
  } catch (err) {
    next(new Error(err.message));
  }
};
