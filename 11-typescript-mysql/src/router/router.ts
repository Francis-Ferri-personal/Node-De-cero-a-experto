import { Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get("/heroes", (req: Request, res: Response) => {

    const query = `SELECT * FROM heroes`;
    MySQL.ejecutarQuery(query, (err:any, heroes: Object []) => {
        if(err){
            return res.status(400).json({
                ok: false,
                error: err
            });
        }
        res.json({
            ok: true,
            heroes
        })
    });
});

router.get("/heroes/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    // El conector de MySQL tiene un metodo para escapar valores especiales
    const escapedId = MySQL.instance.cnn.escape(id);
    const query = `SELECT * FROM heroes where id = ${escapedId}`;
    MySQL.ejecutarQuery(query, (err:any, heroe: Object []) => {
        if(err){
            return res.status(400).json({
                ok: false,
                error: err
            });
        }
        res.json({
            ok: true,
            heroe: heroe[0] // Esto porque siempre devuelve arreglo
        })
    });
});

export default router;

// node_user2
// node_db
// heroes
// 123456