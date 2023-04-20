const { makeInstructor } = require("../controllers/instructorController");
const { requireSignIn } = require("../middlewares/checkSignIn");

const instructorRoutes = (app) => {
  app.put("/api/make-instructor", requireSignIn, makeInstructor);
};

module.exports = { instructorRoutes };
