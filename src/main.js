const express = require('express')

const app = express()

app.get('/', (request, response) => {
  const value = {
    hello: 'world',
  }

  return response.json(value)
})

app.listen(3333, () => {
  console.log('listening on port 3333')
})