require('env2')('config.env')

const handlePlugins = (err) => {
  if (err) {
    console.log('plugins error: ', err)
    throw err
  }
}

const handleStart = (err) => {
  if (err) {
    console.log('server error: ', err)
  } else {
    console.log('server listening on port: ', process.env.PORT)
  }
}

module.exports = {
  handlePlugins: handlePlugins,
  handleStart: handleStart
}
