import mysql from 'mysql2';
import config from '../config/database.mjs';

class Database {
    constructor(){
        this.connection = mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        })
    }
}


export default new Database;