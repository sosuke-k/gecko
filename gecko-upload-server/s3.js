const AWS = require('aws-sdk')
const path = require('path')

let uploadFile = false
const s3  = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: process.env.AWS_ENDPOINT,
    s3ForcePathStyle: true, // needed with minio?
    signatureVersion: 'v4',
    apiVersion: '2006-03-01'
});
uploadFile = (fileName, file, successCallback, failCallback) => {
    const Key = process.env.AWS_FOLDER ? `${path.normalize(process.env.AWS_FOLDER)}/${fileName}` : fileName
    s3.upload({
        Key,
        Body: file,
        Bucket: process.env.AWS_BUCKET,
        }, function(err, data) {
        if (err) {
            failCallback(err.message)
        } else {
            successCallback()
        }
    });
}


module.exports = uploadFile 
