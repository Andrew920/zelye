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

router.route("/sponsor").get((req, res) => {
  console.log("sponsor " + req.params.id);
  res.json({ id: 1, name: "coca-cola", logotype: null, background: null });
});

module.exports = router;
