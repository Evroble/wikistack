const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 8080;
const { db, Page, User } = require("./models");

// Views
const layout = require("./views/layout.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  res.send(layout(""));
});

const init = async () => {
  try {
    await Page.sync();
    await User.sync();

    db.authenticate().then(() => {
      console.log("connected to the database");
    });

    app.listen(PORT, () => {
      console.log(`HEY WE ARE LISTENING PORT ${PORT}`);
    });
  } catch (e) {
    console.log('Whoops, window broke', e);
  }
};
init();
