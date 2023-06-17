// Deleting the data from mongo db

// Deleting the single data 
db.items.deleteOne({price:1}) //deleteOne will delete the first matching entry in case of multi document match

// Deleting the Multiple Data
db.items.deleteMany({rating: {$st:2}})
