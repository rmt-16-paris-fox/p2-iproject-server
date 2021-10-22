const {Plant} = require('../models')

async function authorization(req, res, next) {
    try {
        console.log(req.params.id);
        const foundPlant = await Plant.findByPk (req.params.id)
   if (foundPlant) {
       next()
       if (req.user.id === foundPlant.UserId) {
         next()  
       }else{
           throw {name: 'not Authorized'}
       }
   }
   else{
       throw{name:'PlantNotFound'}
   }
    } catch (err) {
        next(err)
    }
}
module.exports = authorization