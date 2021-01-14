const express = require('express')
const router = express.Router();
const linkController = require('../Controllers/linkController')


router.get('/', (req, res)=>{

    res.render('index')
})

router.get('/all', linkController.getAll)

router.get('/edit/:id', linkController.loadLink)

router.get('/:title', linkController.redirect )




router.post('/', express.urlencoded({extended:true}), linkController.addLink )
router.post('/edit', express.urlencoded({extended:true}), linkController.editLink )

router.delete('/:id', express.json(), linkController.delLink)




module.exports = router