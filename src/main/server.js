require("dotenv").config();
const app = require("./app");
const db = require("./../infra/database/index");

const port = process.env.PORT;

db.connect().then(() => {
  app.listen(port, (err) => {
    if (err) console.error(err);
    console.log(`running port ${port}`);
  });
});
