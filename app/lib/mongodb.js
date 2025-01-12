'use strict';

var MongoClient = require('mongodb').MongoClient;

module.exports = function(name, cb){
  var url = 'localhost:27017/' + name;
  MongoClient.connect(url, function(err, db){
    global.mongodb = db;

    console.log('MongoDB Ready:', name);
    if(cb){cb();}
  });
};