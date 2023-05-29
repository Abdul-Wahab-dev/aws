const {
  CognitoIdentityProviderClient,
} = require("@aws-sdk/client-cognito-identity-provider");

const { S3Client } = require("@aws-sdk/client-s3");
// Create an instance of the CognitoIdentityServiceProvider

const cognitoISP = new CognitoIdentityProviderClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AccessKeyId,
    secretAccessKey: process.env.SecretAccesskey,
  },
});
const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIA2ZLTT6LVJMESW2LQ",
    secretAccessKey: "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",
  },
});
module.exports = {
  cognitoISP,
  client,
};

// AWS.config.update({
//   accessKeyId: process.env.AccessKeyId,
//   secretAccessKey: process.env.SecretAccesskey,
//   region: "us-east-1",
// });
