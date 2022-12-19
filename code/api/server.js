const express = require("express");
app = express();
port = process.env.PORT || 5000;
cors = require("cors");

const router = require("./routes");

app.use(router);

app.use(cors());
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