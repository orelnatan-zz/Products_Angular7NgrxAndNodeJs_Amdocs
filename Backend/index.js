const mysql = require('mysql');
const express = require('express');
var app  = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'shop',
    multipleStatements: true
});

mySqlConnection.connect((err) => {
	if(!err){
		console.log('orell, DB connection succeded!');
	} else {
		console.log('DB connection failed! \n Error : ' + JSON.stringify(err, undefined, 2));
	}
})

app.listen(3001, () => {
	console.log('express server is running at port number 3001');
});

/////////////////////////////////////////////////////////////// API ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////// Products ////////////////////////////////////////////////////////////

// GET all products.
app.get('/getAllProducts', (req, res) => {
	mySqlConnection.query('SELECT * FROM products', (err, rows, fields) => {
		if(!err){
			res.status(200).send(rows); 
		} else {
			res.status(404).send({
                status: 404,
                message: 'Not found: can`t get products list.'
            });
		}
	})
});

// GET product by imdbID (with params).
app.get('/getProductById', (req, res) => {
	mySqlConnection.query(`SELECT * FROM products WHERE imdbID = '${req.query.imdbID}'`, (err, rows, fields) => {
        if(rows[0]){
            res.status(200).send(rows);
        } else {
            res.status(404).send({
                status: 404,
                message: 'Not found: can`t find this product. :('
            });
        }	        
	});
});

// DELETE product by imdbID (with params).
app.delete('/deleteProductById', (req, res) => {
    mySqlConnection.query(`DELETE FROM products WHERE (imdbID = '${req.query.imdbID}')`, (err, ) => {
        res.status(200).send({
            status: 200,
            message: `Product ${req.query.imdbID} has been deleted.`,
        }); 
    });
});

// Update product (with body).
app.put('/updateProduct', (req, res) => {
    const sqlUpdateQuery = `UPDATE products SET                     \
                            Title = '${req.body.Title}',            \
                            Year = '${req.body.Year}',              \ 
                            Poster = '${req.body.Poster}',          \ 
                            Type = '${req.body.Type}'               \
                            WHERE (imdbID = '${req.body.imdbID}')`;                      

    mySqlConnection.query(sqlUpdateQuery, (err, ) => {
        res.status(200).send({
            status: 200,
            message: `Product ${req.body.Title} successfully Updated!`,
        }); 
    });
});




