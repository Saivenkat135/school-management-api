const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use('/', schoolRoutes);

// Serve the static files (HTML, CSS, JS)
app.use(express.static("public"));

// to display (serve) html ( to make sure that the server is running when HOSTED)
app.get(["/", "/api"], (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (e) {
    console.log("erorrrrr", e);
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
