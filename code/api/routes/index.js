const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

// router.route('/').get((req, res) => {
//     console.log('hello world');
//     res.send('hello world')
//   })

router.route("/restaurant/:id").get((req, res) => {
  console.log("restaurant id: " + req.params.id);
  controllers.getRestaurant(req, res);
});

module.exports = router;
