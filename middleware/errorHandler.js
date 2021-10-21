function errorHandler(err, req, res, next) {
    if (err.name === 'SequelizeValidationError') {
        res.status(400).json({ message: err.errors[0].message });
    } else if (err.name === 'SequelizeForeignKeyConstraintError') {
        res.status(400).json({ message: err.parent.detail });
    } else if (err.name === 'JsonWebTokenError') {
        res.status(401).json({ message: err.message })
    } else if (err.message === `Don't have access`) {
        res.status(403).json(err);
    } else if (err.message === 'Movie not found') {
        res.status(404).json(err);
    } else if (err.message === 'Register failed! Email has been used') {
        res.status(400).json(err);
    } else if (err.message === 'Wrong email or password') {
        res.status(401).json(err);
    } else if (err.message === `Can't upload file more than 255 KB`) {
        res.status(401).json(err);
    } else if (err.message === `Can't upload file except image`) {
        res.status(401).json(err);
    } else if (err.message === 'Unauthorized') {
        res.status(403).json({ message: `Don't have access` });
    } else if (err.message === 'Image not found') {
        res.status(404).json(err);
    } else {
        res.status(500).json(err);
    }
};

module.exports = errorHandler