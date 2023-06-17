// Updating the data in mongodb 

// Updating Single line Data
db.items.updateOne({name:"samsung"} , {$set: {price:25}})  // Changing the price to the 25 of date who's name is samsung

// Updating the Multiple line Data
db.items.updateMany( {name:"I-phone"} , {$set: {price:1 , rating:0.5} } ) //updating price and rating of I-phone  
