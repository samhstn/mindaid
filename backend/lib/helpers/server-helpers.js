require('env2')('config.env')

const handlePlugins = (err) => {
  if (err) {
    console.log('plugins error: ', err)
    throw err
  }
}

module.exports = {
  handlePlugins: handlePlugins,
}
