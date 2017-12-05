//import the schema
var toDos = require('../models/toDo');

module.exports = {
    // A find function
    find: function(params, callback){
        toDos.find(params, function(err, todo){
            if(err){
                callback(err, null);
                return
            }
            callback(null, todo);
        }).limit(50);
    },
    // A create function
    create: function(params, callback){
        console.log(params);
        toDos.create(params, function(err, todo){
            if(err){
                callback(err, null);
                return
            }
            callback(null, todo);
        });
    },
    findById: function(id, callback){
        toDos.findById(id, function(err, todo){
            if(err){
                callback(err, null);
                return
            }
            callback(null, todo);
        });
},

};






