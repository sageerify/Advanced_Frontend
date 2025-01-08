

// Destructuring assignments
const Array1 = ["Khan", "Sameer", "Sartaj"] // users 100 
// const [firstName , Lasname] =  Array1
// console.log(firstName);

const advanceJs = {
    firstName :  "Sameer",
    lastName : "Shan",
    address : {
        city: "gilgit",
        zipCode: 15100,
        
    }
}
// nested 
const { address: {city, zipCode}} = advanceJs
console.log(city, zipCode);

// Rest and spread operators ...
const [firstName , ...rest] =  Array1
console.log(firstName);
console.log(rest);


const Array2 =["Ali", "Sheraz"]
const combineArray = [...Array1, ...Array2]
console.log(combineArray);
// isArray() 

if (Array.isArray(Array1) && Array.isArray(Array2)) {
    console.log("proceed!");
} else {

}

// Optional Chaining ?.
console.log(advanceJs?.address?.country ,"country not found!");
// Nullish Coalescing ??
console.log(advanceJs.address.country  ??  "country not found!");


 
