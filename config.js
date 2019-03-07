module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/mockserverdb',
    //db: process.env.MONGODB || 'mongodb://190.144.179.82:2027/mockserverdb',
    SECRET_TOKEN: 'mysecrettoken$2019'
}