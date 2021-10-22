

const {User, Plant} = require ('../models')
class Category {
   static async showAll (req, res, next){
      try {
         const plant = await Plant.findAll()
         res.status(200).json(plant)
      } catch (err) {
         next(err)
      }
       
   } 
   static async addPlant(req, res,next){
      try {
         console.log('masuk controller');
         const {name, category, price, description, imageUrl,  } = req.body
         // console.log(req.body);
         // console.log(req.user);
         const plant = await Plant.create({
            name, category, price, description,imageUrl,
            UserId:req.user.id 
         },)
         console.log(plant, 'plant');
         res.status(201).json(plant)
         if (!plant) {
            throw {name:'Bad Request'}
         }
      } catch (err) {
       next(err)
      }
   }

   static async deletePlant(req, res, next){
      const { id } = req.params;
      try {
        const plant = await Plant.findByPk(id);
        if (plant) {
          await Plant.destroy({ where: { id } });
          res.status(200).json({ message: `sucess delete plant ${plant.name}` });
        } else {
          throw { name: "PlantNotFound" };
        }
      } catch (err) {
        next(err);
      }
   }
   static async updatePlant(req, res, next){
      try {
         console.log('masuk');
         const {id} = req.params
         const {name, category, price, description, imageUrl } = req.body
         const plant = await Plant.findByPk(id)
         console.log(plant);
         if (!plant) { 
            throw {name: 'PlantNotFound'}
            
         }
         const result = await Plant.update({
            name, category, price, description, imageUrl
         },{ where: { id }, returning: true })
         console.log(result);
         res.status(200).json(result)
         
      } catch (err) {
         console.log(err);
         next(err)
         
      }
   }
static async updateStatus (req, res, next){
try {
   const {id} =req.params
   const {status} = req.body
   let editStatus = await Plant.update({
      status
   }, {where:{id},returning:true})

   let statusPlant = editStatus[1][0]
   res.status(200).json(statusPlant)
} catch (err) {
   next(err)
}
}
}
module.exports = Category