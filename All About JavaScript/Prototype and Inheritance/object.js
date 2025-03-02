const person = {
    name :  "ali",
    meet: function() {
        console.log("Hello! My name is " + this.name);
    }
};

const sageer = Object.create(person); // sageer's prototype is `person`
sageer.name = "sageer";
sageer.sayAge = function() {
    console.log("i am 18 years old." + this.name);
};

sageer.meet(); 
sageer.sayAge(); 
