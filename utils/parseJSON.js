export default (payload) => {
    try {
        return JSON.parse(payload);
    } catch (err) {
        return null;
    }
};
