// 1- Remove duplicate value from array without using built in function 

let arr = [2, 3, 4, 2, 5, 6, 4];
console.log(`The duplicate values are: `);
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] == arr[i + j]) {
            console.log(arr[i]);
        }
    }
}

// 2-swap two variables without the need for temporary third variable 

let numbers = [43, 23, 54, 25, 61];

console.log(`Before Swapping: ${numbers}`);

[numbers[2], numbers[3]] = [numbers[3], numbers[2]]  //by destructing method

console.log(`After Swapping: ${numbers}`)


// 3- comparison between var let and const keywords 

/* var ---> var has globally scoped and can be redeclared and updated.
   let ---> let is block scoped and can be updated but can't redeclared.
   const ---> const is block scoped and can't be redeclared  and updated*/

// 4- undefined vs null 

/* undefined means that object is declared but not initialized with any value on the other hand null is assigned to the variable which means it has empty value */

// 5-  arrows function, immediately invoked function and normal function, write down a briefly description. 

/* */

// 6- Define objects destructuring and give an example… 

/* It allows us to extract data from objects,arrays and maps and set them into new distinct variables.
Allows us to extract multiple properties,items from an array at a time */
var employee = {
    fn: 'Rao',
    ln: 'Rabi',
    dob: '2003',
}
//destructing object into variables

var { fn, ln, dob } = employee;
console.log(fn, ln, dob);
var { fn: firstName, ln: lastName, dob: dateOfBirth } = employee;
console.log(`After Assigning new names: ${firstName} , ${lastName} , ${dateOfBirth}`);

// 7-what is temporal dead zone.

/* It is the period of time in which let and const declarations can't be accessed. It starts when the code execution eneters the block which contains let and const
until the declaration has executed */

// 8- define asynchronius vs synchronius

/* Synchronius ---> In synchronius code executes in sequence and waits for the previous section to complete.Javascript itself is a synchronius language
   Asynchronius ---> Code can execute in parallel.Next operations can occur while previous operations is still getting proccessed.*/