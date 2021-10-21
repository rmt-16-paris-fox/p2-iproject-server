const errHandle = (err,req,res,next)=>{
    let message
    // console.log(err,"error handler")
    switch (err.name) {
        case "forbidden":
            res.status(403).json({msg: "You are not allowed to access!"})
            break;
        case 'watchlistNotFound':
            res.status(404).json({msg: 'Watchlist not found'})
            break;
        case "UserNotFound":
            res.status(401).json({error: "Unathorized access"})
            break;
        case "SequelizeValidationError":
            message = err.errors.map(el => el.message)
            res.status(400).json({message});
            break
        case "SequelizeUniqueConstraintError":
            message = err.errors.map(el => el.message)
            res.status(400).json({message});
            break
        case "noMail":
            res.status(401).json({msg: "Email is required"})
            break
        case "noPass":
            res.status(401).json({msg: "Password is required"})
            break
        case "unauthorized":
            res.status(401).json({msg: "Wrong Email/Password"})
            break
        case "NoToken":
            res.status(401).json({msg: "No token found"})
            break
        case "JsonWebTokenError":
            res.status(401).json({msg: "invalid token"})
            break
        case 'FailedUpload':
            res.status(400).json({msg: 'ini error gambar ceritanya!'})
            break
        case "NoImage":
            res.status(400).json({msg: "gk ada gambar uploadan"})
            break
        case "fileTooBig":
            res.status(400).json({msg: "Image size too big to upload."})
            break
        case "errorImgType":
            res.status(400).json({msg: "Image must be jpg or png."})
            break
        default:
            res.status(500).json(err);
            break;
    }
}

module.exports = {errHandle}