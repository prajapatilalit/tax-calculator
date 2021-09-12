const express = require("express");
const router = express.Router();

//@route GET api/calculate
//@desc Test route
//@access Private
router.get("/", (req, res) => {
  res.send("Calculate route");
});
module.exports = router;
