
const express = require('express');
const koalaRouter = express.Router();


// DB CONNECTION
const pool = require('../modules/pool.js');


// GET
koalaRouter.get( '/', (req, res) => {
    console.log( 'GET Request made for /koalas' );
    let queryText = 'SELECT * FROM "koalas";';
    pool.query(queryText).then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error in get request');
        res.sendStatus(500);
    })
    // res.send( koalaList );
});

// POST
koalaRouter.post( '/', (req, res) => {
    console.log( 'POST request made for /koalas' );
    console.log( req.body );
    let koalaToAdd = req.body;
    let queryText = `INSERT INTO "koalas" ("name", "age", "gender", "readyForTransfer", "notes")
                    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [koalaToAdd.name, koalaToAdd.age, koalaToAdd.gender, koalaToAdd.readyForTransfer, koalaToAdd.notes]).then((result) => {
        res.sendStatus(201); 
    }).catch((error) => {
        console.log( `Error in POST ${error}` );
        res.sendStatus(500);
    })
});

// PUT
koalaRouter.put('/:id', (req, res) => {
    let koalaId = req.params.id;
    console.log( `PUT request made for ${koalaId}` );
    let queryText = `UPDATE "koalas" SET "readyForTransfer" = $1 WHERE "id" = $2`;
    pool.query(queryText, [true, koalaId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log( `Error in PUT ${error}` );
        res.sendStatus(500);
    })
});


// DELETE
koalaRouter.delete( '/:id', (req, res) => {
    console.log( req.params );
    const deleteIndex = Number( req.params.id );
    let queryText = 'DELETE FROM "koalas" WHERE "id" = $1';
    pool.query(queryText, [deleteIndex]).then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('error in delete');
        res.sendStatus(500);
    })
    // koalaList = koalaList.filter( (koala, index) => index !== deleteIndex )
    // res.sendStatus(200);
});




module.exports = koalaRouter;