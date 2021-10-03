const router = require('express').Router()
const posts = require('./rooms')



router.get('/', (req, res) => {
    res.send('this is a blog website')
})

router.use('/rooms', posts)



module.exports = router