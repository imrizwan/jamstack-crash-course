const { GET_LINKS } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {

    if(event.httpMethod !== 'GET') {
        return formattedResponse(405, 'Method not supported');
    }

    try {
        const res = await sendQuery(GET_LINKS);
        const data = res.allLinks.data;
        return formattedResponse(200, data);
    } catch (e) {
        console.error(e)
        return formattedResponse(500, { err: "Something went wrong", e });
    }
} 