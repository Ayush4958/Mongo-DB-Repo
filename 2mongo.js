// Searching the data for mongodb

// use ayushcart

// This Query will return all the objects with rating 4.8

db.items.find({rating:4.8})

db.items.find({rating: {$gte:2}}) // even show the same value as 2
db.items.find({rating: {$gt:2}}) // doesn't show the same value as 2

// using 'And' operator

db.items.find({rating: {$gt:2} , price : {$gt:10000}})

// using "Or" operator

db.items.find({$or: [{rating: {$gt:2.5}} , {price: {$gt:5000}}]})

// returning only rating

db.items.find({rating: {$gte:2}} ,{rating:1})

db.items.find({},{rating:1 , price:1})