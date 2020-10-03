const got = require('got')
const pino = require('pino')
const logger = pino({timestamp: pino.stdTimeFunctions.isoTime})

exports.handler = async function scheduled (event) {
  logger.info(JSON.stringify(event))

  try {
    let url = 'https://triangular-destiny-alley.glitch.me/ping'
    logger.info(`Pinging ${url}`)
    let pong = await got.get(url, {
      responseType: "json"
    })
    if(pong.error) {
      logger.error(`Error: ${pong.error}`)
    }
  } catch(e) {
    logger.error(`Error: ${e.message}`)
  }
}
