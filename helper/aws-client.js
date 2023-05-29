const { c } = require("@aws-sdk/client-cognito-identity-provider");

AWS.config.update({
  accessKeyId: process.env.AccessKeyId,
  secretAccessKey: process.env.SecretAccesskey,
  region: "us-east-1",
});

// Create an instance of the CognitoIdentityServiceProvider

const cognitoISP = new AWS.CognitoIdentityServiceProvider();

module.exports = {
  cognitoISP,
};
