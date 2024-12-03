import {Router} from 'express'
import pool from '../database.js'

const router = Router();

router.get('/add', (req, res)=>{
    res.render('integrantes/add');
})

router.post('/add', async(req, res) => {
    try{
        const {name, role} = req.body;
        const newIntegrante = {
            name, role
        }
        await pool.query('INSERT INTO integrantes SET ?', [newIntegrante])
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get('/list', async(req, res)=> {
    try{
        console.log("request-->", req)
        const [result] = await pool.query('SELECT * FROM integrantes');
        console.log("resultado:-->", result)
        res.render('integrantes/list', {integrantes: result});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/edit/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const [integrante] = await pool.query('SELECT * FROM integrantes WHERE id = ?', [id]);
        const integranteEdit = integrante[0];
        res.render('integrantes/edit', {integrante: integranteEditk});
    }
    catch (err){
        res.status(500).json({message:err.message});
    }
})

router.post('/edit/:id', async(req, res) => {
    try{
        const {name, role} = req.body;
        const {id} = req.params;
        const editIntegrante = {name, role};
        await pool.query('UPDATE integrantes SET ? WHERE id = ?', [editIntegrante, id]);
        res.redirect('/list')
        
    }
    catch (err){
        res.status(500).json({message:err.message});
    }
})
router.get('/delete/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        await pool.query('DELETE FROM integrantes WHERE id = ?', [id]);
        res.redirect('/list');
    }
    catch(err) {
        res.status(500).json({message:err.message});
    }
});

export default router;

