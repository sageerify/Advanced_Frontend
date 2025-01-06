
const animal = {
    eat: function(){
    console.log("This animal eats food.");
    }
};
const dog = Object.create(animal); // `dog`'s prototype is `animal`
dog.bark = function(){
    console.log("Woof!");
};
dog.eat();// Output: This animal eats food. (inherited from `animal`)
dog.bark(); // Output: Woof!

