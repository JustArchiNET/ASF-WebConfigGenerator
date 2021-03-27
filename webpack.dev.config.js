const config = require('./webpack.config')

config.mode = 'development'
config.devtool = 'eval'

module.exports = config
