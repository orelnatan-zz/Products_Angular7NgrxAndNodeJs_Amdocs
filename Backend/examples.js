
// GET user by id (by concatenate).
// front -> getUserById/654
app.get('/getUserById/:id', (req, res) => {
	mySqlConnection.query('SELECT * FROM users WHERE id = ?', [ req.params.id ], (err, rows, fields) => {
		if(!err){
			res.send(rows[0]);        
		} else {
			console.log('error: ' + err);
		}
	})
})


app.get('/getAllUsers', (req, res) => {
	mySqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
		if(!err){
            // console.log(rows);    // Print response to console.
			res.send(rows);         // Show response on localhost:3001.
		} else {
			res.status(404).send('Not found: can`t get "users".');
		}
	})
});