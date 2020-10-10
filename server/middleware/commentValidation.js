module.exports = (req, res, next) => {
  const { comment } = req.body;

  if (req.path === '/comments/submit') {
    if (comment.length > 850) {
      return res.status(401).json('Exceeded Comment data limits.');
    } else if (![comment].every(Boolean)) {
      return res.status(401).json('Missing Comment Data');
    }
  }

  next();
};
