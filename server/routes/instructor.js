const { makeInstructor } = require("../controllers/instructorController");
const { adminMiddleware } = require("../middlewares/authMiddleware");
const { requireSignIn } = require("../middlewares/checkSignIn");

const instructorRoutes = (app) => {
  app.put(
    "/api/make-instructor",
    [adminMiddleware, requireSignIn],
    makeInstructor
  );
};

module.exports = { instructorRoutes };
