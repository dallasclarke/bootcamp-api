const express = require("express");
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius
} = require("../controllers/bootcamps");

router.get("/", getBootcamps);
router.get("/:id", getBootcamp);
router.get("/radius/:zipcode/:distance", getBootcampsInRadius);

router.post("/", createBootcamp);

router.put("/:id", updateBootcamp);

router.delete("/:id", deleteBootcamp);

module.exports = router;
