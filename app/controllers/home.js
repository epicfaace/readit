var express = require('express'),
  router = express.Router(),
  Article = require('../models/article'),
  fs = require('fs');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
  var sets = fs.readdirSync("./public/sounds");
  sets = removeHiddenFiles(sets);
  if (sets.length == 0)
  	sets = ["CALI", "PACE 2015"]; //fallback
  res.render('index', {
  	title: 'Generator-Express MVC',
    sets: sets
  });
});

router.get('/list', function (req, res, next) {
  var setName = req.query.set;
  var packets = fs.readdirSync("./public/sounds/"+setName);
  packets = removeHiddenFiles(packets);
  var lengths = [];
  /*for (var packet in packets) {
    var packetContents = fs.readdirSync("./public/sounds/"+setName+"/"+packets);
  }*/
  var packetContents = fs.readdirSync("./public/sounds/"+setName+"/1"); //assuming every packet has the same # of questions...
  packetContents = removeHiddenFiles(packetContents);
  var length = packetContents.length;
  var responseJSON = {
    "packets": packets,
    "length": length
  };
  res.setHeader('Content-Type', 'application/json');
  res.send(responseJSON);
});

router.get('/getSound', function (req, res, next) {
  var setName = req.query.set;
  var packet = req.query.packet;
  var number = req.query.number;

  var filePath = "./public/sounds/"+setName+"/"+packet+
  	"/TU"+number+".m4a";
    var stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'audio/m4a',
        'Content-Length': stat.size
    });

    var readStream = fs.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(res);
});

function readDirCallback(err, files) {

}

function removeHiddenFiles(list) { //for those pesky .DS_Store files...
	var list2 = [];
	for (i in list) {
		if (list[i][0]!=".")
  		list2.push(list[i]);
  	}

  return list2;
}
