// 3 routes: home, make reservation, view table
// when 5 are added into the reservation, push the rest to waiting list. 

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var nodemon = require('nodemon');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var customers = []; //reservation

var waitingList = [];


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function (req, res) {

    return res.json({ reservations: customers, waitlist: waitingList });
});





//create new reversavtion input

app.post("/tables", function (req, res) {

    var newReservation = req.body;




    res.json(newReservation);


    if (customers.length < 5) {
        customers.push(newReservation)

    } else {
        waitingList.push(newReservation)

    };

    console.log(newReservation);
})

//if more than 5 is in the customers array, then push the followings to waiting list


app.listen(PORT, function () {
    console.log("!");
});