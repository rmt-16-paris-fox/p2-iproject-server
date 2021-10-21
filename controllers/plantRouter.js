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
         const {name, category, price, description, imageUrl } = req.body
         const plant = await Plant.create({
            name, category, price, description,imageUrl,
            UserId:req.user.id 
         })
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

}
module.exports = Category