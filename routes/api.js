var express = require('express');
var router = express.Router();
var ToDosController = require('../database/controllers/toDoController');

router.get('/:resource', function (req,res) {

   var resource = req.params.resource;

    if(resource == 'toDos') {
        ToDosController.find(req.query, function (err, results) {
            if (err) {
                res.json({
                    confirmation: 'fail',
                    message: err
                });
                return
            }
            res.json({
                confirmation: 'success',
                result: results
            });
        });
    }
});

router.post('/:resource', function (req,res) {
    var resource = req.params.resource;

    if (resource == 'toDos') {
        console.log(req.body);
        ToDosController.create(req.body, function (err, result) {
            if (err) {
                res.json({
                    confirmation: 'fail',
                    message: err
                });
                return
            }
            res.json({
                confirmation: 'success',
                result: result
            })
        })
    }
});

router.get('/:resource/:id', function (req,res) {
    var resource = req.params.resource;
    var id = req.params.id;

    if(resource == 'toDos'){
        ToDosController.findById(id, function (err, results) {
            if(err){
                res.json({
                    confirmation: 'fail',
                    message: 'Not Found'
                });
                return
            }
            res.json({
                confirmation:'success',
                result: results
            })
        });
    }
});


module.exports = router;







