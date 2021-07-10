module.exports = {
  getBootcamps: (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps" });
  },
  getBootcamp: (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
  },
  createBootcamp: (req, res, next) => {
    res.status(200).json({ success: true, msg: "Create new bootcamps" });
  },
  updateBootcamp: (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
  },
  deleteBootcamp: (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
  },
};
