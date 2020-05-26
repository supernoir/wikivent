const express = require('express')
const bodyParser = require('body-parser')
const path = require("path")
const app = express()
const port = 8081 || process.env.PORT
const cors = require("cors")
const rdb = require('rethinkdb')
const apiVersion = 1;
const config = {
	host: '127.0.0.1',
	port: 28015,
	db: 'inventory'
}

const moduleAlias = require('module-alias');
moduleAlias.addAlias('styled-components', path.join(__dirname, '../node_modules/styled-components'));

app.use(bodyParser())

app.use(cors())
app.use(createConnection)

app.use(express.static(path.join(__dirname, '../build')));

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to the WIKIVENT API, please use the documentation to use the routes you need",
		version: apiVersion
	})
})

// Routes
app.route('/approved/get').get(getApproved)
app.route('/approved/makes').get(getAllApprovedMakes)
app.route('/approved/makes/:make').get(filterApprovedByMake)
app.route('/approved/models').get(getAllApprovedModels)
app.route('/approved/models/:model').get(filterApprovedByModel)
app.route('/approved/get/:id').get(getById)
app.route('/submitted/new').post(create);
app.route('/submitted/get').get(getSubmitted)
app.route('/submitted/delete/:id').post(deleteSubmittedById)

app.use(closeConnection)

function getApproved(req, res, next) {
	const query = req.query
	rdb
		.table('approved')
		.filter(query)
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

function getAllApprovedMakes(req, res, next) {
	rdb
		.table("approved").pluck("make")
		.distinct()
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

function filterApprovedByMake(req, res, next) {
	if ((req) && (req.params != null)) {
		const query = req.params.make
		rdb
			.table("approved")
			.filter({ 'make': query })
			.run(req._rdbConn)
			.then(function (cursor) {
				return cursor.toArray()
			})
			.then(function (result) {
				res.send(JSON.stringify(result))
			})
			.error(handleError(res))
			.finally(next)
	} else {
		handleError(res)(new Error("The data must have a field `make`."));
		next();
	}
}

function filterApprovedByModel(req, res, next) {
	if ((req) && (req.params != null)) {
		const query = req.params.model
		rdb
			.table("approved")
			.filter({ 'model': query })
			.run(req._rdbConn)
			.then(function (cursor) {
				return cursor.toArray()
			})
			.then(function (result) {
				res.send(JSON.stringify(result))
			})
			.error(handleError(res))
			.finally(next)
	} else {
		handleError(res)(new Error("The data must have a field `model`."));
		next();
	}
}

function getAllApprovedModels(req, res, next) {
	rdb
		.table("approved").pluck("model")
		.distinct()
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

function deleteSubmittedById(req, res, next) {
	if ((req) && (req.params != null)) {
		const queryId = req.params.id
		rdb
			.table('submitted')
			.get(queryId)
			.delete()
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
console.log('WikiVent API running \nPort: ' + port)