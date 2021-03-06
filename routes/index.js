var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var unis = mongoose.model('unis', 
		{name : String,
			url : String,
		 	law : Number,
		 	accounting :Number,
		 	cs : Number,
		 	commerce : Number,
			 business : Number,
			 ee : Number,
			 management : Number,
			 med : Number,
			 health : Number,
			 se : Number,
			 physical : Number,
			 dent: Number,
			 mecheng: Number});
var caUnis = mongoose.model('caUnis', 
		{name : String,
			url : String,
		 	law : Number,
		 	accounting :Number,
		 	cs : Number,
		 	commerce : Number,
			 business : Number,
			 ee : Number,
			 management : Number,
			 med : Number,
			 health : Number,
			 se : Number,
			 physical : Number,
			 dent: Number,
			 mecheng: Number});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Where Do I Apply' });
});
/* GET findUnis page*/
router.get('/findUnis', function(req, res, next) {
  res.render('findUnis', { title: 'CHOOSE YOUR FIELD' });
});

/* GET findCaUnis page*/
router.get('/findCaUnis', function(req, res, next) {
  res.render('findUnis', { title: 'CHOOSE YOUR FIELD' });
});

/*Get availableUnis page
router.get('/availableUnis', function(req, res) {
	var db = req.db;
	var theGrade = db.get('rscore');
	theGrade.find({},{},function(e,docs){
		res.render('availableUnis', {
			"availableUnis" : docs
		});
	});
});
*/


/* POST availableUnis page */
router.post('/availableUnis', function(req, res) {
	var aUnis = [];
	var aUnisUrl = [];
	var db = req.db;
	var program = req.body.program;
	var rScore = req.body.grade;
		unis.find(function(err,uni) {
			if (err) return console.error(err);
			for (var i in uni){

				if (rScore > uni[i][program]){
					aUnis.push(uni[i].name);
					aUnisUrl.push(uni[i].url);
				};
			};
		console.log(rScore);
		console.log(aUnisUrl);
		res.render('availableUnis', {"availableUnis": aUnis, "aUnisUrl": aUnisUrl});
		});
})

/* POST availableCaUnis page */
router.post('/availableCaUnis', function(req, res) {
	var aUnis = [];
	var aUnisUrl = [];
	var db = req.db;
	var program = req.body.program;
	var rScore = req.body.grade;
		caUnis.find(function(err,uni) {
			if (err) return console.error(err);
			for (var i in uni){

				if (rScore > uni[i][program]){
					aUnis.push(uni[i].name);
					aUnisUrl.push(uni[i].url);
				};
			};
		console.log(rScore);
		console.log(aUnisUrl);
		res.render('availableCaUnis', {"availableCaUnis": aUnis, "aUnisUrl": aUnisUrl});
		});
})

module.exports = router;
