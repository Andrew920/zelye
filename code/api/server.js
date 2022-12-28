const {execSync} = require('child_process');
execSync('sleep 10');

const express = require("express");
app = express();
port = process.env.PORT || 5000;
cors = require("cors");

const router = require("./routes");

app.use(router);

app.use(cors());
app.use(express.json());

const path = require('path');

app.use(express.static('./build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.use(express.static('./client/build'));
// app.get('/*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/'));
// });

app.listen(port, () => console.log("Backend server live on " + port));

// app.get("/api/restaurant/:id", (req, res) => {
//   // Vrne vse menije, submenije, ime ozadja
//   res.send({ message: ("Restauracija: " + req.params.id) });
// });

// app.get("/api/meni:id", (req, res) => {
//   res.send({ message: ("Restauracija: " + req.params.id) });
// });

// app.get("/", (req, res) => {
//     res.send({ message: ("Backend deluje!!!!") });
// });