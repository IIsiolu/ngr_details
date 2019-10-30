import express from "express";
import stateController from "../controllers/state.controller";
const route = express.Router();

route.get('/', (req, res)=>{
    res.render('pages/index.ejs');
});

route.post('/store_state', stateController.storeState);

export default route;