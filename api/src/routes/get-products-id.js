require ('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {Products} = require('../db.js');
const {infoDetail} = require('./controlers/controladores')

const router = Router();

router.get('/:id', async (req, res) => {
    let id = req.params.id
    try {
        const result = await infoDetail(id)
        res.status(200).json(result)    
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

module.exports = router;