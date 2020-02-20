const express = require("express");
const app = express();

const sequelize = require('./config/db');

const routerconfig = require("./routes/routes");
app.use('/api',routerconfig);

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  });


app.listen(8087, () => {
  console.log("Server running on 8087");
});


