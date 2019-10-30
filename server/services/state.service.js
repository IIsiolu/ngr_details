import con from "../db/sql";

const stateService = {
    async storeState(requestbody){
        const { state, capital, governor, slogan, landmass } = requestbody;
        const landMass = `${landmass}sq km`;
        // const value = [state, capital, governor, slogan, landMass];
        const sql = `INSERT INTO state_info (state, capital, cur_governor, slogan, landmass) VALUES ('${state}', '${capital}', '${governor}', '${slogan}', '${landMass}')`;
        console.log(sql);
        await con.query(sql, (err, result)=>{
            if(err) throw new Error(err.message);
            return result;
        });
        // console.log(state, capital, governor, slogan, landMass);
    }
}

export default stateService;