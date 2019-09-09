const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send('Hello World')
})


app.use(routes)
app.listen(PORT)


