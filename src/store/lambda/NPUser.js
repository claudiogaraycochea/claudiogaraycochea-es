'use strict';
console.log('Loading function');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
exports.handler = (event, ctx, callback) => {
    var params = {
        TableName: "np_user"
    };
    
    docClient.scan(params, function(err,data){
       if(err) {
           callback(err, null);
       } else {
           callback(null, data);
       }
    });
}
