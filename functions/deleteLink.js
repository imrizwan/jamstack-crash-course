const { DELETE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {

    if(event.httpMethod !== 'DELETE') {
        return formattedResponse(405, 'Method not supported');
    }

    const { _id } = JSON.parse(event.body);
    const variables = { _id } 
    try {
        const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables);
        return formattedResponse(200, deletedLink);
    } catch (e) {
        console.error(e)
        return formattedResponse(500, { err: "Something went wrong", e });
    }
} 