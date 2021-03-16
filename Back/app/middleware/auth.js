const jwt = require('jsonwebtoken');

const authorizationMiddleware = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return response.status(401).json({
        error: "missing token"
    })
    jwt.verify(token, process.env.SECRET, (err, member) => {
        if (err) {
            response.status(401).json({
                error: "invalid token"
            })
        } else {
            request.member = member
            next()
        }
    })
}

module.exports = authorizationMiddleware;