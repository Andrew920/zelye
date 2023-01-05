const { execSync } = require("child_process");
execSync("sleep 10");

const express = require("express");
app = express();
port = process.env.PORT || 5000;
cors = require("cors");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const router = require("./routes");

app.use("/images", express.static('images'));

app.use("/sponsor", express.static('sponsor'));

router.route("/sponsor").get((req, res) => {
  console.log("sponsor " + req.params.id);
  res.json({ id: 1, name: "coca-cola", logotype: null, background: null });
});

app.use("/api", router);

app.use(cors());
app.use(express.json());

const path = require("path");

app.use(express.static("./public/build"));

app.get("/*", (req, res) =>
  res.sendFile(path.resolve("public", "build", "index.html"))
);

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
