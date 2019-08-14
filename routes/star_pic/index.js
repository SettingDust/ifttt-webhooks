const { getTriggerUrl } = require('../../config');
const got = require('got');
const eventName = 'star_pic';
const triggerUrl = getTriggerUrl(eventName);

module.exports = async ctx => {
    const { text } = ctx.params;
    const body = {
        value1: text
    };
    ctx.response.status = 200;
    console.log((await got(triggerUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })).body);
};
