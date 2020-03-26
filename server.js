const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/fruitDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: [true, "Error: no name specified" ]
    },
       rating: {
           type: Number,
           min: 1,
           max: 10 
       }, 
    review: String 
});

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
})

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model('Person', personSchema);
/*
Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        console.log(fruits);
    }
});

Person.find(function(error, people) {
    if(error){
        console.log(error);
    } else {
        //console.log(fruits);
        people.forEach(person => {
            console.log(person.firstName, person.lastName, person.age);
        });
 
    }
});
const orange = new Fruit({
    name: "orange",
    rating: 8
});
Fruit.update({_id: "5e7c6a65a10cabf1d72967ea"}, {review: "Juicy fruit"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
});
Person.updateOne({_id: "5e7c64b67f1bebe8b36c9011"}, {age: 30}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
})*/
Fruit.deleteMany({name: "Banana"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item successfully deleted.");
    }
});

/*

const jack = new Person({
    firstName: 'Jack',
    lastName: 'Smith',
    age: 45
})

const peter = new Person({
    firstName: 'Peter',
    lastName: 'Brown',
    age: 52
})

/*
const person = new Person({
    firstName: 'John',
    lastName: 'Doe',
    age: 29
})

Person.insertMany([jack, peter], (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Inimesed lisatud andmebaasi');
    }
}) */

//person.save();
//orange.save();
 
app.listen(3005, ()=>{
    console.log("Server töötab pordil 3005");
});
