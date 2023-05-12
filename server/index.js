const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { userRoutes } = require("./routes/register");
const { loginRoutes } = require("./routes/login");
const mongoose = require("mongoose");
const { logoutRoutes } = require("./routes/logout");
const { instructorRoutes } = require("./routes/instructor");

const app = express();

require("dotenv").config({ path: ".env" });

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

port = process.env.PORT || 8000;
const uri = process.env.DB_URI;

// Database connection
main()
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log("Database connection failed : ", err.message));

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

userRoutes(app);
loginRoutes(app);
logoutRoutes(app);
instructorRoutes(app);

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
