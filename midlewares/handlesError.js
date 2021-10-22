const errors = (err, req, res, next) => {
    let message;
    switch (err.name) {
      case "SequelizeValidationError":
        message = err.errors.map((el) => {
          el.message;
        });
        res.status(400).json({ message });
        break;
      case "RegisterNotFound":
        res.status(400).json({ message: "Registrasi Gagal" });
        break;
        case "Bad Request":
        res.status(400).json({ message: "silahkan diisi" });
        break;
      case "invalid email or password":
        res.status(401).json({ message: "email or password invalid" });
        break;
      case "invalid email/password":
        res.status(401).json({ message: "email or password invalid" });
        break;
      case "notAuthenticated":
        res.status(401).json({ message: "auntentication invalid, login lagi" });
        break;
      case "invalid access Token":
        res.status(401).json({ message: "auntentication invalid" });
        break;
        case "not Authorized":
          res.status(403).json({ message: "authorized invalid" });
          break;

      
      case "PlantNotFound":
        res.status(404).json({ message: "Tanaman tidak ditemukan" });
        break;
  
    
     
  
      default:
        console.log(err);
        res.status(500).json(err);
        break;
    }
  };
  
  module.exports = errors;
  