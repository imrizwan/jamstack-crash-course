const { UPDATE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {

    if(event.httpMethod !== 'PUT') {
        return formattedResponse(405, 'Method not supported');
    }

    const { name, url, description, _id, archived } = JSON.parse(event.body);
    const variables = { name, url, description, archived, _id }
    try {
        const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables);
        return formattedResponse(200, updatedLink);
    } catch (e) {
        console.error(e)
        return formattedResponse(500, { err: "Something went wrong", e });
    }
} 