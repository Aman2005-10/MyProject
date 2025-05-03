import express from "express";

const app = express();
const port = 7000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello From Express App with MongoDB" });
});

app.listen(port , () => {
    console.log( `Server Start on Port ${port}`);
});

