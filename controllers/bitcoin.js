const User = require('../models/User');
/**
 * 
 * Tramsaction page.
 */
exports.index = (req, res) => {
	users = User.find({}, function (err, users) {
		if (err) {
			console.log(err);
		}
	  res.render('bitcoin/transaction', {
	    title: 'transaction',
	    users: users
	  });
	});
};

/**
 * 
 * Tramsaction page.
 */
exports.transaction = (req, res) => {
	users = User.find({}, function (err, users) {
		if (err) {
			console.log(err);
		}
	  res.render('bitcoin/transaction', {
	    title: 'transaction',
	    users: users
	  });
	});
};