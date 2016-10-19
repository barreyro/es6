// PROTOTYPE SYNTAX

const Home = function(squareFeet, numOfBedrooms, numOfBathrooms) {
  this.squareFeet = squareFeet;
  this.numOfBedrooms = numOfBedrooms;
  this.numOfBathrooms = numOfBathrooms;
};

Home.prototype.getDescription = function() {
  return `This home is ${this.squareFeet} sq. ft. It has ${this.numOfBedrooms} bedrooms and ${this.numOfBathrooms} bathrooms.`
}

const myDreamHouse = new Home(10000, 10, 5, true);

console.log(myDreamHouse.getDescription());

// NEW CLASS SyntaxError
// To define a class, we use the class keyword followed by the name of the class. The body of the class is the part between the curly braces.
// Syntactical sugar over the existing prototype-based inheritance

// class Home {
  
//    // runs every time a new instance is created with the new operator
//    constructor(squareFeet, numOfBedrooms, numOfBathrooms) {
//       this.squareFeet = squareFeet;
//       this.numOfBedrooms = numOfBedrooms;
//       this.numOfBathrooms = numOfBathrooms;
//    }
  
//    // instance methods use the method initializer shorthand also used in objects
//    getDescription() { 
//       return `This home is ${this.squareFeet} sq. ft. It has ${this.numOfBedrooms} bedrooms and ${this.numOfBathrooms} bathrooms.`
//    }
  
//    getAvgSqFtPerSection() {
//       return `This home has an average of ${this._calculateSqFtPerSection()} feet per section.`;
//    }
  
//    // no access modifiers in JS ("private" and "public")
//    // prefixing a method with an underscore (_) is a convention for indicating that a method should not be invoked from public API
//    _calculateSqFtPerSection() {
//       const livingRoomSqFt = this.squareFeet/5;
//       return (this.squareFeet - livingRoomSqFt) / (this.numOfBedrooms + this.numOfBathrooms);
//    }
  
//    addExtraLargeKitchen() {
//       this.extraLargeKitchen = true;
//    }
  
//    // getters and setters
//    get nickname() {
//       return this.name;
//    }
  
//    set nickname(nickname) {
//       this.name = nickname;
//    }
  
//    // The static keyword defines a static method for a class. Static methods are called without instantiating their class and are also not callable when the class is instantiated. Static methods are often used to create utility functions for an application.
//    static getHomeTypes() {
//       return ['House', 'Apartment'];
//    }
  
// }

// // The extends keyword is used to create a class that inherits methods and properties from another class.
// class Apartment extends Home {
//    constructor(squareFeet, numOfBedrooms, numOfBathrooms, numOfFloors, balcony) {
//       // The super method runs the constructor function from the parent class
//       // must be the first line in constructor
//       super(squareFeet, numOfBedrooms, numOfBathrooms);
//       this.numOfFloors = numOfFloors;
//       this.balcony = balcony;
//    }
  
//    getDescription() { // polymorphic
//    // "super" holds reference to object from base class
//       return `${super.getDescription()}. It also has ${this.numOfFloors} floors ${this.balcony ? 'and a balcony.' : '.'}`;    
//    }
  
//    addLuxuryComponents() {
//       // inherits methods
//       this.addExtraLargeKitchen();
//       this.balcony = true;
//    }
// }


