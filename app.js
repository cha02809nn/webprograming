const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("RMUTL Express !!!!");
});

app.get("/user",(req, res) => {
    let data = {
        user: "miw",
        email: "miw@miw.miw"
    };
    res.status(200).json(data);
});

app.listen(port, () => {
    console.log(`Express Server Run at http://localhost:${port}`);
});