const { createClient }  = require('redis');

const redisClient = createClient({
    // For local Redis (no authentication)
    socket: {
        host: 'localhost',
        port: 6379
    }
});

module.exports = redisClient;