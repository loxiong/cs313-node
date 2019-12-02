const { Pool } = require('pg');
const db_url = process.env.DATABASE_URL;
//test it
//console.log('DB URL: " + db_url');
const pool = new Pool({connectionString: db_url});


const getPersons = (request, response) => {
    var sql = "SELECT * FROM person";

    pool.query(sql, function(err, result) {
        // If an error occurred...
        if (err) {
            console.log("Error in query: ")
            console.log(err);
        }

        // Log this to the console for debugging purposes.
        console.log("Back from DB with result:");
        console.log(result.rows);
        
        var resultsList = document.getElementById("results");
            resultsList.innerHTML = "";
            
            for (var i = 0; i < results.length; i++) {
            resultsList.innerHTML += "<p>"+results[i]+"</p>";
            }
  
        response.status(200).json(results.rows);
        response.write.json(results.rows);
    });
}
    



//-------------------------------------------------------------//

const getPersonById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM Person WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addPerson = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO Person (firstname, lastname) VALUES ($1, $2)', [name, email], (error, results) => {
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
    'UPDATE Person SET firstname = $1, lastname = $2 WHERE id = $3',
    [firstname, lastname, id],
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
  getPersons: getPersons,
  getPersonById: getPersonById,
  addPerson: addPerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson
}