const { client } = require("../helper/aws-client");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
exports.createPresignedURL = async (req, res, next) => {
  try {
    const command = new PutObjectCommand({
      Bucket: "wahab-presigned-url-testing",
      Key: "compare.svg",
    });

    const url = await getSignedUrl(client, command, { expiresIn: 3600 });

    res.send(url);
  } catch (err) {
    next(new Error(err.message));
  }
};
