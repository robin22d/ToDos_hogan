var express = require('express');
var router = express.Router();
var ToDosController = require('../database/controllers/toDoController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createToDo', function(req, res, next) {

  ToDosController.find(req.query, function (err, results) {
    if (err) {
        res.json({
            confirmation: 'fail',
            message: err
        });
        return
    }
    var toDos = []
    for(var i = 0; i<results.length; i++){
      toDos.push(results[i].task)
    }
    res.render('createToDo', { list: toDos});
    console.log(results[0].task);
  });

});

module.exports = router;
