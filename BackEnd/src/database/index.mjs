import mysql from 'mysql';
import config from '../config/database.mjs';

class Database {
    constructor(){
        this.connection = mysql.createConnection(
            config.host,
            config.user,
            config.password,
            config.database
        )
    }
}

export default new Database;