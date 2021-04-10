/* NPCreateUser */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
exports.handler = (event, ctx, callback) => {
  var params = {
    Key: {
      email: event.email
    },
    TableName: "np_user"
  };
  
  docClient.get(params, function(err,data){
    if(err) {
      callback(err, null);
    } else {
      var res = {
        status: false,
        data: null
      }
      if (data.Item.password===event.password) {
        res.status = true;
        res.data = {
          id: data.Item.id,
          lastname: data.Item.lastname
        }
      }
      callback(null, res);
    }
  });
}
