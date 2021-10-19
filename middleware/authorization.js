const {Class, MyClass} = require('../models')

const authorization = async (req, res, next) => {
    try {
        let classId = req.params.id
        let foundClass = await Class.findByPk(classId)
        if(!foundClass) throw ({message: "Course not found"})
        let dataClass = await MyClass.findOne(
            {  where: 
                {
                    ClassId: classId,
                    UserId: req.user.id
                }
            }
        )
        if(!dataClass) throw ({message: "You are not authorized"})
        next()    
    } catch (error) {
        if(error.message == "Course not found"){
            res.status(404).json({message: error.message})
        } else if (error.message == "Forbidden Access"){
            res.status(403).json({message: error.message})
        } else {
            res.status(500).json({message: "Internal server error"})
        }
    }
}

module.exports = authorization