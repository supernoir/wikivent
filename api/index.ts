const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8081 || process.env.port
const cors = require("cors")
const rdb = require('rethinkdb')
const apiVersion = 1;
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
		message: "Welcome to the WIKIVENT api, please use the documentation to use the routes you need",
		version: apiVersion
	})
})

// Routes
app.route('/approved/get').get(getApproved)
app.route('/approved/get/:id').get(getById)
app.route('/submitted/new').post(create);
app.route('/submitted/get').get(getSubmitted)

app.use(closeConnection)

function getApproved(req, res, next) {
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

function getSubmitted(req, res, next) {
	rdb
		.table('submitted')
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

function getById(req, res, next) {
	if ((req) && (req.params != null)) {
		const queryId = req.params.id
		rdb
			.table('approved')
			.get(queryId)
			.run(req._rdbConn)
			.then((cursor) => {
				console.log(cursor)
				return cursor
			})
			.then((result) => {
				console.log(result)
				res.send(JSON.stringify(result))
			})
			.error(handleError(res))
			.finally(next)
	}
	else {
		handleError(res)(new Error("The data must have a field `id`."));
		next();
	}
}

function create(req, res, next) {
	const submission = req.body;
	console.log(submission)
	submission.createdAt = rdb.now();
	rdb.table('submitted')
		.insert(submission, { returnChanges: true })
		.run(req._rdbConn)
		.then(function (result) {
			if (result.inserted !== 1) {
				handleError(res)(new Error("Document was not inserted."));
			}
			else {
				res.send(JSON.stringify(result.changes[0].new_val));
			}
		}).error(handleError(res))
		.finally(next);
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