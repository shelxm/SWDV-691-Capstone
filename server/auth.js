const jwt= require('jsonwebtoken');
import secret from './controllers/user.js';

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token) res.status(401).json({message: 'No token, authourization denied'})

    const decoded = jwt.verify(token, secret)
}