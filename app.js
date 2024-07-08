const http = require('http')

const server = http.createServer((req, res) => {
  res.write('Welcom to my chanel')
  res.end()
})

server.listen(5000)