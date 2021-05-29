import mysql from 'mysql';

export default class MySQL {
    private static _instance: MySQL;

    cnn: mysql.Connection;
    conectado: boolean = false; // Esto es extra para ejemplo, no suele ir en una instancia real

    constructor(){
        console.log("Clase inicalizada");
        this.cnn = mysql.createConnection({
            host: "35.224.233.216",
            user: "node_user2",
            password: "123456",
            database: "node_db"
        });

        this.conectarDB();
    }


    // Patron Singleton. Si existe devuelve la instancia, si no existe crea una nueva  
    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    static ejecutarQuery(query: string, callback: Function){
        // Hace uso del get
        this.instance.cnn.query(query, (err, results: Object[], fields)=> {
            if(err){
                console.log("Error en query");
                console.log(err);
                return callback(err);
            }
            if (results.length === 0){
                return callback("El registro solicitado no existe");
            }
            callback(null, results);
        });
    }

    private conectarDB() {
        this.cnn.connect((err: mysql.MysqlError) => {
            if (err){
                console.log(err.message);
                return
            }
            this.conectado = true;
            console.log("Base de datos online!");
        } );
    }

}