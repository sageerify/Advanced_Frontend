const students = [
    { name: "Sameer", interviewGiven: true },
    { name: "Mushraf", interviewGiven: false },
    { name: "Sameer", interviewGiven: true },
    { name: "Ahson", interviewGiven: false },
    { name: "Daniyal", interviewGiven: true },
];

//filter and map
const notInterviewed = students.filter(s => !s.interviewGiven).map(s => ({ ...s, addedToList: true }));

// Separate 
const interviewed = students.filter(s => s.interviewGiven);

console.log("Not Interviewed (Added):", notInterviewed);
console.log("Interviewed:", interviewed);