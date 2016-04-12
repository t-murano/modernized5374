var argv = require('yargs')
  .default('host', 'localhost')
  .default('port', '8090')

module.exports = {
  host: argv.host,
  port: argv.port
}

