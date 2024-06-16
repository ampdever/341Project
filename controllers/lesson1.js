const helloRoute = (req, res) => {
    res.send('Hello');
};

const goodbyeRoute = (req, res) => {
    res.send('Goodbye');
};

module.exports = {
    helloRoute,
    goodbyeRoute
};