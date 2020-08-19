const express = require('express')
const log4js = require('log4js')
const config = require('config')
const MongoClient = require('mongodb').MongoClient;

const app = express()
const logger = log4js.getLogger()
logger.level = config.loglevel
let db

logger.info("Starting echo app!")
logger.debug("Configuration: ", config)

if (!config.persist) {
  logger.warn('Persistency is OFF')
} else {
  const client = new MongoClient(config.mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  client.connect((err) => {
    if (err) {
      logger.fatal("Could not connect to MongoDB!", err)
      process.exit(1)
    }

    logger.warn("Connected successfully to mongodb")
    db = client.db(config.dbname)
  })
}

const echo = (req, res) => {
  logger.debug("Request: ", req)
  const input = 'input' in req.query ? req.query.input : ''
  if (input.length == 0) {
    logger.error('User requested echo for empty string!')
    res.send('You must supply an input string!')
  } else {
    logger.info(`User requested echo for string ${input} and from the host : ${req.headers.host}`)
    if (config.persist) {
      const collection = db.collection('echos');
      collection.insertOne({
        time: Date.now(),
        input
      })
    }
    res.send(`Echo says: ${input} , ${req.headers.host}`)
  }
}

app.get('/', (req, res) => echo(req, res))

app.get('/test', (req, res) => {
  console.log(req.headers.host)
  res.send(req.headers.host);
})

app.listen(config.port, () => logger.info(`Echo listening on port ${config.port}!`))