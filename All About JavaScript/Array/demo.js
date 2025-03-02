const stunudent = ["satywam", "aman", "Pinki", "Phanki", "rosham"];
console.log(stunudent)
//Array Methods
// const number = ["33", "34", "2", "44", "66"]
//1. Length
// console.log(student.length)

//2. pop()
// console.log(student)
// student.pop()
// console.log(student)
// student.pop()
// console.log(student)

//3. push
// console.log(student)
// student.push("ali")
// console.log(student)

//4. slice
// const newStudent = student.slice(2)
// student.slice(2);
// console.log(student);
// console.log(newStudent)

// 5. sort 
// console.log(student.sort())
// student.sort();
// console.log(student);

//6. Reverse
// student.sort();
// student.reverse();
// console.log(student);

//array never be a const. we can change the value
// console.log(number);
// number[0] = 100;
// console.log(number)
const number = [54,85,1,56,70];

number.forEach(function(value, index, array){
    console.log(value);
});
const student = [
    {
        name: "ali khan",
        roll: 111,
        marks: 643
    },
    {
        name: "Muhammaad Ali",
        roll: 112,
        marks: 632
    },
    {
        name: "Jameel azam",
        roll: 121,
        marks: 633
    },

]

console.log(student)
// console.log(student[0].name);