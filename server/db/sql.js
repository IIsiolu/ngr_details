import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "nigeria_info"
});

con.connect((err)=>{
	if(err) throw new Error(err.message);
    console.log("Connected!");
});

export default con;