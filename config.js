const apiKey = 'bX9Z0lF4xmfFbg4qMNN_lT';
const getTriggerUrl = event => `https://maker.ifttt.com/trigger/${event}/with/key/${apiKey}`;

module.exports = {
    getTriggerUrl
};
