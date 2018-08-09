var express = require("express");
var questionCtrl = require("./questionController");


const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
    .get(questionCtrl.list);

module.exports=router;