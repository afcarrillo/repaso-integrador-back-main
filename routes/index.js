const router= require('express').Router()
const libros= require('./libros')


router.use('/libros', libros)




module.exports= router