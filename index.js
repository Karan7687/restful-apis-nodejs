const express = require("express");
const placesRoutes = require("./routes/places-routes");
const app = express();

//Routes will be here...

app.use(placesRoutes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
