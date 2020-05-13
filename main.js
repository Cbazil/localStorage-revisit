// Make of object
let myObj = {
  firstname: "John",
  lastname: "Doe",
  age: 31
}

// Making binding of a converted object into an JSON format Object (Only reads strings)
let myObjSerialized = JSON.stringify(myObj);

// Creating the JSON Object to localStorage

localStorage.setItem("myObj", myObjSerialized);

console.log("Storage", localStorage.myObj);

// Converting the JSON object to the normal JavaScript Object
let myObjDeserialized = JSON.parse(myObjSerialized);
console.log(myObjDeserialized);