const message = process.env['HELLO_WORLD_MESSAGE'] || 'No message set';

exports.helloWorld = (req, res) => {
  res.send(message);
}
