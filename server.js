const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const co = require('co')
const { MongoClient } = require('mongodb')
const body = require('body-parser')


const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
const ip = require('./pages/Ip.js')

// fake DB
const messages = []

co(function * () {  
  var mongoURI = "mongodb://" + ip + ":27017/test";
  const db = yield MongoClient.connect(mongoURI)
  db.on('error', function(err) { console.log(err.message); });
  db.once('open', function() {
    console.log("mongodb connection open");    
  });

  // socket.io server
  io.on('connection', socket => {


  })

  yield nextApp.prepare().then(() => {        

    app.use(body.json())
    app.use((req, res, next) => {
      req.db = db
      next()
    })
    
    app.get('*', (req, res) => {
      return nextHandler(req, res)
    })

    server.listen(3000, ip, (err) => {
      if (err) throw err
      console.log('> Ready on http://'+ ip + ':3000')      
    })
  })
})
