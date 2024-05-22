// Object :

// A collection of properties, where each property is defined as a key-value pair.
// Each property has a key and a value.
// The value can be a string, number, boolean, array, object, or function.

// Traditional method

let student = {
  name: "silan",
  age: 23,
  city: "Bhubaneswar",
  marks: [80, 90, 70],
  isMarried: false,
  address: { po: "RRL", pin: 751013 },
};

// console.log(student);

 let array = ["John", 30, "Bhubaneswar", [80, 90, 70], false];


 // Constructor :
let newStudent = new Object();
newStudent.name = "silan samal";
newStudent.age = 23;
newStudent.city = "kendrapara";
newStudent.marks = [80, 90, 70];
newStudent.isMarried = false;
newStudent.address = { po: "Barakandha", pin: 754213 };
console.log(newStudent);


// Accessing object :

// myarray[0]
console.log(student.name); // dot notation
console.log(student["marks"]); // bracket notation
console.log(newStudent.city);
console.log(newStudent.age);
console.log(student.city);
console.log(newStudent.address);





