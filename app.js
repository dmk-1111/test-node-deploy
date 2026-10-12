import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(path.dirname(fileURLToPath(import.meta.url)), "views"));

app.get("/", async (req, res, next) => {
    try {
        res.render('home', {'name': 'Hello,'});
    } catch (error) {
        next(error);
    }
});

// app.listen(3000, (err) => {
//     if(err){
//         console.log("Error : " + err);
//     }
//     console.log('http://localhost:3000');
// });

export default app;