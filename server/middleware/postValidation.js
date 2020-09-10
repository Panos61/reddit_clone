module.exports = (req, res, next) => {
  const { title, content } = req.body;

  if (req.path === '/submit') {
    if (title.length > 150 || title.length <= 0) {
      return res.status(401).json('Exceeded Title data limits.');
    } else if (![title, content].every(Boolean)) {
      return res.status(401).json('Missing Post Data');
    }
  }

  next();
};
