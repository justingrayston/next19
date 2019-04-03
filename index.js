const message = process.env['MESSAGE'] || 'No message set';

exports.helloWorld = (req, res) => {
  res.send(message);
}
