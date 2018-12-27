const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/uzhackers');
// mongoose.connect('mongodb://ali:ali123@ds061839.mlab.com:61839/aliexpressapp')

mongoose.Promise = global.Promise;

module.exports.Form = require('./form');
// module.exports.User = require('./user');
// module.exports.Seller = require('./seller');

