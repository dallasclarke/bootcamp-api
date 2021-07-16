const Bootcamp = require("../models/Bootcamp");

module.exports = {
  getBootcamps: async (req, res, next) => {
    try {
      const bootcamps = await Bootcamp.find();

      res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  },
  getBootcamp: async (req, res, next) => {
    try {
      const bootcamp = await Bootcamp.findById(req.params.id);

      if (!bootcamp) {
        return res.status(400).json({ success: false });
      }

      res.status(200).json({ success: true, data: bootcamp });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  },
  createBootcamp: async (req, res, next) => {
    try {
      const bootcamp = await Bootcamp.create(req.body);

      res.status(201).json({
        success: true,
        data: bootcamp,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  },
  updateBootcamp: async (req, res, next) => {
    try {
      const bootcamp = await Bootcamp.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!bootcamp) {
        return res.status(400).json({ success: false });
      }

      res.status(200).json({ success: true, data: bootcamp });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  },
  deleteBootcamp: async (req, res, next) => {
    try {
      const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

      if (!bootcamp) {
        return res.status(400).json({ success: false });
      }

      res.status(200).json({ success: true, data: {} });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  },
};
