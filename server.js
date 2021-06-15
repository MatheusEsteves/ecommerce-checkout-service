const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());

require("./routes/index")(app);

app.listen(8080);
