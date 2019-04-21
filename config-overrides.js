const rewireStyl = require('react-app-rewire-stylus-modules')

module.exports = {
  webpack: function (config, env) {
    config = rewireStyl(config, env)
    return config
  }
}
