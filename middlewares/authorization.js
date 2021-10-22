const admin = async (req, res, next) => {
  try {
    const role = req.user.role;
    if (role !== "admin") {
      throw { name: "no access" };
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { admin };
