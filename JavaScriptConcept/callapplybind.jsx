const person = {
    name:"Hemant"
}
function greet(age,city){
   console.log(`HI I am ${this.name} .I belong to ${city} and I am ${age} years old`) 
}

greet.call(person,26,"Ahmedabad");
greet.apply(person,[26,"Ahmedabad"]);
const newFuc = greet.bind(person,28,"Ahmedabad");
newFuc();
