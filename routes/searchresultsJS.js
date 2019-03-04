// Get all of our friend data
var data = require('../data.json');
// var filter = {};

exports.view = function(request, response){
	console.log(data);
	data["viewAlt"]=false;
	//Return partial data only the one that is filtered. Return a different variable
	response.render('searchresults', data);
};

exports.viewAlt = function(request, response){
	console.log(data);
	data["viewAlt"]=true;
	response.render('searchresults', data);
}

//Create function that sets variable filter. Then create 