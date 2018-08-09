var express = require("express");
var pollCtrl = require("./pollController");


const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
    .get(pollCtrl.list);

module.exports=router;