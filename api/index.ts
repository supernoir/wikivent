const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8081 || process.env.port
const cors = require("cors")
const rdb = require('rethinkdb')
const config = {
	host: '127.0.0.1',
	port: 28015,
	db: 'inventory'
}

app.use(bodyParser())
app.use(cors())
app.use(createConnection)

app.get("/", (req, res) => {
	res.json({
		message: "hello"
	})
})

// Routes
app.route('/approved/get').get(get)

app.use(closeConnection)

function get(req, res, next) {
	rdb
		.table('approved')
		.run(req._rdbConn)
		.then(function (cursor) {
			return cursor.toArray()
		})
		.then(function (result) {
			res.send(JSON.stringify(result))
		})
		.error(handleError(res))
		.finally(next)
}

function handleError(res) {
	return function (error) {
		res.send(500, { error: error.message })
	}
}

function createConnection(req, res, next) {
	rdb
		.connect(config)
		.then(function (conn) {
			req._rdbConn = conn
			next()
		})
		.error(handleError(res))
}

function closeConnection(req, res, next) {
	req._rdbConn.close()
}


app.listen(port)
console.log('Listening on port ' + port)