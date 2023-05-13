const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { userRoutes } = require("./routes/register");
const { loginRoutes } = require("./routes/login");
const mongoose = require("mongoose");
const { logoutRoutes } = require("./routes/logout");
const { instructorRoutes } = require("./routes/instructor");
const cookieParser = require('cookie-parser');

const app = express();

// Middlewares
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

require("dotenv").config();

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
