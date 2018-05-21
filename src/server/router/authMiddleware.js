const jwtMiddleware = require('express-jwt')
const NotAllowedError = require('./NotAllowedError')

function checkAuthError(err, req, res, next) {
  if (err instanceof jwtMiddleware.UnauthorizedError) {
    res.status(401)
    res.send({
      reason: err.message
    })
  } else if (err instanceof NotAllowedError) {
    res.status(403)
    res.send({
      reason: err.message
    })
  } else {
    next(err)
  }
}

module.exports = {
  checkAuthError
}
