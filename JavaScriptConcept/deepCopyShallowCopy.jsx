//deep copy
// A deep copy means creating a completely new object, including all nested objects, so there are no shared references. Any changes in the copied object won’t affect the original one

// Method 1: Using JSON.parse and JSON.stringify
//Methiod 2: Using structuredClone (available in modern browsers and Node.js)
// Method 3: Using a recursive function to manually copy properties


let obj1 = {
    name:"hemant",
    address:{
        city:"Ahmedabad",
        state:"Gujrat"
    }
}

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Surat"
console.log(obj1.address.city)
console.log(obj2.address.city)

//shallow copy
// A shallow copy creates a new object, but nested objects are still shared by reference.

//method 1: Using the spread operator
// Method 2: Using Object.assign()
// Method 3: Using a simple loop to copy properties

let obj3 = {
    name:"hemant",
    address:{
        city:"Ahmedabad",
        state:"Gujrat"
    }
}
let obj4 = {...obj3};

obj4.address.city = "Surat"
console.log(obj3.address.city)
console.log(obj4.address.city)
