const request = require('request');

const { APIUrl } = require('../constants/constants');

const fetchComments = (req, res) => {
    try {
        request(APIUrl, (error, response, body) => {
            if (error) {
                return console.log(error);
            }
            res.send(JSON.parse(body));
        });
    } catch(err) {
        throw err;
    }
};

module.exports = {
    fetchComments
};
