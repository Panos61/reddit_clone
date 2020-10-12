const e = require('express');

module.exports = (req, res, next) => {
  const { name, description } = req.body;

  if (req.path === '/subreddits/create') {
    if (
      name.length > 25 ||
      name.length <= 0 ||
      description.length > 35 ||
      description.length <= 0
    ) {
      return res.status(401).json('Exceeded data limits.');
    } else if (![name, description].every(Boolean)) {
      return res.status(401).json('Missing Post Data');
    }
  }

  next();
};
