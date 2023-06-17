// Deleting the data from mongo db

db.items.deleteOne({price:1}) //deleteOne will delete the first matching entry in case of multi document match

db.items.deleteMany({rating: {$st:2}})