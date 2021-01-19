
/**
 * Response helper function
 * @param {object} responseObject - express response object
 * @param {number} statusCode - the HTTP status code you want returned
 * @param {string} message - the message for the http status code
 * @param {object | string } dataOrError - the payload to be delivered if the request was
 * successful or the error message if it was not
 */

const response = (responseObject, statusCode, dataOrError) => {
  const res = responseObject;
  let x = 'data';
  let success = true;
  let payload = dataOrError;
  if (statusCode >= 400) {
    x = 'error'; success = false; payload = `${payload}`;
  }
  return res.status(statusCode).json({
    status: statusCode, [x]: payload, success,
  });
};

export default response;
