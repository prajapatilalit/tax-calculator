const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const taxData = require("../../models/CalculatedData");

//@route POST api/calculate
//@desc Test route
//@access Private
router.post(
  "/",
  [
    auth,
    [
      check("basic", "basic is required").not().isEmpty(),
      check("lta", "lta is required").not().isEmpty(),
      check("hra", "hra is required").not().isEmpty(),
      check("fa", "fa is required").not().isEmpty(),
      check("investment", "investment is required").not().isEmpty(),
      check("rent", "rent is required").not().isEmpty(),
      check("cityType", "cityType is required").not().isEmpty(),
      check("mediclaim", "mediclaim is required").not().isEmpty(),
      check("appHRA", "appHRA is required").not().isEmpty(),
      check("taxInc", "taxInc is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      basic,
      lta,
      hra,
      fa,
      investment,
      rent,
      cityType,
      mediclaim,
      appHRA,
      taxInc,
    } = req.body;
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newTaxData = new taxData({
        name: user.name,
        basic,
        lta,
        hra,
        fa,
        investment,
        rent,
        cityType,
        mediclaim,
        appHRA,
        taxInc,
      });
      const taxResult = await newTaxData.save();
      res.json(taxResult);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route    GET api/calculate
//@desc     Get All taxData
//@access   Private

router.get("/", auth, async (req, res) => {
  try {
    const taxDatas = await taxData.find().sort({ date: -1 });
    res.json(taxDatas);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
