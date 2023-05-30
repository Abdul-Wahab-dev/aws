const { validateClient, validateUser } = require("../helper/signupHelper");
const crypto = require("crypto");
const {
  SignUpCommand,
  InitiateAuthCommand,
  ConfirmSignUpCommand,
  AuthFlowType,
} = require("@aws-sdk/client-cognito-identity-provider");
const { fromCognitoIdentityPool } = require("@aws-sdk/credential-providers");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { cognitoISP, identityClient } = require("../helper/aws-client");
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
    if (response) {
      const client = new S3Client({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
          identityPoolId: "",
          clientConfig: { region: "us-east-1" },
          logins: {
            [``]: response.AuthenticationResult.IdToken,
          },
        }),
      });

      // Use the temporary credentials to make authorized requests to AWS services
      const s3PutCommand = new PutObjectCommand({
        Bucket: "",
        Key: "example.txt",
        Body: "Hello, AWS S3!",
        ContentType: "text/plain",
      });

      const s3PutResponse = await client.send(s3PutCommand);
      console.log("File uploaded to S3 successfully:", s3PutResponse);
    }
    res.send(response.AuthenticationResult);
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
