const express = require('express')
const mongo = require('mongoose')

const app = express()

app.listen(3300, () => {
  console.log('listening port 3300')
})