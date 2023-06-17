// Inserting Data in mongo db

// use ayushcart

db.items.insert({name:"I-phone" , price:25000 ,  rating:4.8 , quantity:89 ,  sold: 54})

db.items.insertMany([{name:"I-phone" , price:25000 ,  rating:4.8 , quantity:89 ,  sold: 54} , {name:"samsung" , price : 18000 ,  rating : 3.5 , quantity : 75 ,  sold : 30} , {name:"Redmi" , price : 15000 ,  rating : 4, quantity : 85 ,  sold : 49 }])

const points = [25,15,50,80,90,100]
Myarr(points)


//  code 
// function Myarr(arr){
//     let num = arr.length
//     let max = Infinity
//     while(num--){
//         if (arr[num] < max)
//         max = arr[num]
//     }
//     console.log(max)
// }


// let a = "zo"
// let b = "szylophone"
// if (a>b){
//     console.log("A is greater")
// }
// else{
//     comsoel.log("B is greater")
// }