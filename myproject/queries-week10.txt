const { Pool } = require('pg');
const db_url = process.env.DATABASE_URL;
//test it
//console.log('DB URL: " + db_url');
const pool = new Pool({connectionString: db_url});


const getPersons = (request, response) => {
  pool.query('SELECT * FROM Person ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPersonById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM Person WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createPerson = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO Person (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Person added with ID: ${result.insertId}`)
  })
}

const updatePerson = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE Person SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Person modified with ID: ${id}`)
    }
  )
}

const deletePerson = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM Person WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Person deleted with ID: ${id}`)
  })
}

module.exports = {
  getPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
}