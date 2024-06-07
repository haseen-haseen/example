// // return object 
// function createPerson(name, age) {
//     return {
//       name: name,
//       age: age
//     };
//   }
  
//   const person = createPerson('Alice', 30);
//   console.log(person);

// //return object through array 
// // function createPeople() {
// //     const person1 = { name: 'Alice', age: 30 };
// //     const person2 = { name: 'Bob', age: 25 };
// //     return [person1, person2];
// //   }
  
// //   const people = createPeople();
// //   console.log(people);
  


// //return multiple objects through object 
// // function createPeople() {
// //     const person1 = { name: 'Alice', age: 30 };
// //     const person2 = { name: 'Bob', age: 25 };
// //     return {
// //       person1: person1,
// //       person2: person2
// //     };
// //   }
  
// //   const people = createPeople();
// //   console.log(people.person1);



// obj=[{
//     name:"riya",
//     age:"12"

// },
// {
//     name:"shalu",
//     age:"15"

// },
// {
//     name:"reena",
//     age:"16"

// }]
// obj.map(objs=>{
//    console.log(objs.name) ,
//    console.log(objs.age) 

// })
  




// function round(n, upperBound, lowerBound) {
//   if (n > upperBound) || (n < lowerBound) 
//   { 
//     throw new Error(`Number ${n} is more than ${upperBound} or less than ${lowerBound}`);
//   } else if (n < (upperBound + lowerBound) / 2) {
//     return lowerBound;
//   } else {
//     return upperBound;
//   }
  
// }


localStorage.setItem("hellotxt","hnji txt ")
document.getElementById("txt").innerHTML=localStorage.getItem("hellotxt")
