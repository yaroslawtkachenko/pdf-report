const parseJSON = (payload) => {
    try {
        return JSON.parse(payload);
    } catch (err) {
        return null;
    }
};

module.exports = {
    parseJSON
};
