const {
  CognitoIdentityProviderClient,
} = require("@aws-sdk/client-cognito-identity-provider");

// Create an instance of the CognitoIdentityServiceProvider

const cognitoISP = new CognitoIdentityProviderClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AccessKeyId,
    secretAccessKey: process.env.SecretAccesskey,
  },
});

module.exports = {
  cognitoISP,
};

// AWS.config.update({
//   accessKeyId: process.env.AccessKeyId,
//   secretAccessKey: process.env.SecretAccesskey,
//   region: "us-east-1",
// });
