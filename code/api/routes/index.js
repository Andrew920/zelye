const express = require("express");
const controllers = require("../controllers");
const router = express.Router();
const bp = require('body-parser');

// router.route('/').get((req, res) => {
//     console.log('hello world');
//     res.send('hello world')
//   })


router.route("/restaurant/:id").get((req, res) => {
  console.log("restaurant id: " + req.params.id);
  controllers.getRestaurant(req, res);
});

router.use(bp.urlencoded({ extended: true }));
router.use(bp.json());

router.route("/restaurant/:id/rate").post((req, res) => {
  console.log("rating restaurant id: " + req.params.id);
  controllers.rateRestaurant(req, res, req.body);
});

router.route("/sponsor").get((req, res) => {
  console.log("sponsor " + req.params.id);
  res.json({ id: 1, name: "coca-cola", logotype: "coca-cola-sponsor.png", background: "coca-cola.png" });
});

module.exports = router;
