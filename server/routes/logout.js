const { logout } = require("../controllers/logoutController");

const logoutRoutes = (app) => {
  app.get("/api/logout", logout);
};

module.exports = { logoutRoutes };
