const {
  CognitoIdentityProviderClient,
  CognitoIdentityProvider,
} = require("@aws-sdk/client-cognito-identity-provider");
const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
const { S3Client } = require("@aws-sdk/client-s3");
// Create an instance of the CognitoIdentityServiceProvider

const cognitoISP = new CognitoIdentityProviderClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AccessKeyId,
    secretAccessKey: process.env.SecretAccesskey,
  },
});
const cognitoIP = new CognitoIdentityProvider({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AccessKeyId,
    secretAccessKey: process.env.SecretAccesskey,
  },
});

const identityClient = new CognitoIdentityClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AccessKeyId,
    secretAccessKey: process.env.SecretAccesskey,
  },
});
const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});
module.exports = {
  cognitoISP,
  client,
  identityClient,
  cognitoIP,
};

// AWS.config.update({
//   accessKeyId: process.env.AccessKeyId,
//   secretAccessKey: process.env.SecretAccesskey,
//   region: "us-east-1",
// });
