const { logout } = require("../controllers/logoutController");

const logoutRoutes = (app) => {
  app.post("/api/logout", logout);
};

module.exports = { logoutRoutes };
