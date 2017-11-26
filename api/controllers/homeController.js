module.exports = function (app) {
    app.get('/', (req, res) => {
        res.send(JSON.stringify({ a: 1 }));
    });
}