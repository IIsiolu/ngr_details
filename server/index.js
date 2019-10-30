import dotenv from "dotenv";
dotenv.config();
import express from "express";
import stateRoute from "./routes/state.route";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(stateRoute);
app.use(express.static(path.join(__dirname, "./views/public")));

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}. ctrl-c to exit`);
});