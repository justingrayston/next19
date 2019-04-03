const message = process.env['MESSAGE'] || 'No message set';

/**
 * A simple function that response with a message set by environment
 * variable.
 * @param {Request} req
 * @param {Response} res
 */
exports.helloWorld = (req, res) => {
  res.send(message);
}
