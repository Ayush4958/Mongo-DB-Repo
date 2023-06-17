// Inserting Data in mongo db

// Way of switching Databases 
// use ayushcart


db.items.insert({name:"I-phone" , price:25000 ,  rating:4.8 , quantity:89 ,  sold: 54})

db.items.insertMany([{name:"I-phone" , price:25000 ,  rating:4.8 , quantity:89 ,  sold: 54} , {name:"samsung" , price : 18000 ,  rating : 3.5 , quantity : 75 ,  sold : 30} , {name:"Redmi" , price : 15000 ,  rating : 4, quantity : 85 ,  sold : 49 }])
