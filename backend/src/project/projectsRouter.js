var express = require("express");
var projectCtrl = require("./projectController");


const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
    .get(projectCtrl.list);

module.exports=router;