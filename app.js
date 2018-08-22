// CONSTRUCTOR
/* function Person(newFirstName, newLastName, newRace, newHeigth, newAge) {
  // the this keyword means that the value of the attribute/property depends on the instance/object.
  this.firstName = newFirstName;
  this.lastName = newLastName;
  this.race = newRace;
  this.heigth = newHeigth;
  this.age = newAge;
}
const pedro = new Person("Pedro", "Gonzalez", "african", "six feet", 30);
 */

/* function Person(newFirstName, newLastName) {
  // the this keyword means that the value of the attribute/property depends on the instance/object.
  this.firstName = newFirstName;
  this.lastName = newLastName;
} */

// PROTOTYPES
// tip - every method that has the same instructions regardless of the instance/object should be a prototype.

/* Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
 */

// PROTOTYPAL INHERITANCE.
/* 
function Employee(newFirstName, newLastName, newIDNumber) {
  Person.call(this, newFirstName, newLastName); // allows to call another function inside the current context.

  IDNumber = newIDNumber;
}
 */

/* 
const employee1 = new Employee("Mary", "Johson", "123-456-789");
console.log(employee1); 
*/

// INHERIT PERSON PROTOTYPE METHODS

//Employee.prototype = Object.create(Person.prototype);

// MAKE CUSTOMER PROTOTYPE RETURN CUSTOMER()

//Employee.prototype.constructor = Employee;

//ES6 CLASSES
class Person {
  constructor(newFirstName, newLastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// SUBCLASSES

class Employee extends Person {
  constructor(newFirstName, newLastName, newIDNumber) {
    super(newFirstName, newLastName);

    this.IDNumber = newIDNumber;
  }
  static getCompanyName() {
    return "Wal-mart";
  }
}
const mary = new Employee("mary", "louis", "123-456-789");
console.log(mary.getFullName());
console.log(Employee.getCompanyName());
