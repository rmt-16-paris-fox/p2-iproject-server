const errorHandler = (err, req, res, next) => {
    let code;
    let message;
    switch (err.name) {
        case "SequelizeValidationError":
            code = 400;
            message = err.errors.map(el => {
                return el.message;
            })
            break;
        case "SequelizeUniqueConstraintError" :
            code = 400;
            message = err.errors.map(el => {
                return el.message;
            })
            break;
        case 'Wrong NIP/Password':
            code = 401;
            message = 'Unauthorized';
            break;
        case 'JsonWebTokenError':
            code = 401;
            message = 'Unauthorized';
            break;
        case 'Forbidden':
            code = 403;
            message = err.name;
            break;
        case "Data Not Found":
            code = 404;
            message = err.name;
            break;
        default:
            code = 500;
            message = err.name;
            break;
    }
    res.status(code).json({ message });
}

module.exports = errorHandler;