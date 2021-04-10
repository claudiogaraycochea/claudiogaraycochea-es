const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
exports.handler = (event, ctx, callback) => {
    var params = {
        Item: {
            id: ctx.awsRequestId,
            email: event.email,
            password: event.password,
            firtname: event.firstname,
            lastname: event.lastname,
            city: event.city,
            zip_code: event.zip_code,
            state: event.state,
            country: event.country
        },
        TableName: "np_user"
    };
    
    docClient.put(params, function(err,data){
       if(err) {
           callback(err, null);
       } else {
           callback(null, "true");
       }
    });
}