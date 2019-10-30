import stateService from "../services/state.service";

const stateController = {
    async storeState(req, res){
        try{
            const formDatas = req.body;
            const response = await stateService.storeState(formDatas);
            if(response){
                res.send("saved");
            }
        }catch(err){
            console.log(err.message);
            // res.send(err.message);
            // res.render('pages/404');
        }        
    }
}

export default stateController;