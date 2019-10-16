/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. -Global Objet Binding
* 2. -Implicit Binding
* 3. -Explicit  Binding
* 4. -New Binding
*
* write out a code example of each explanation above
*/

// Principle 1
function whatsUp(){
    console.log("It's casual");
}
whatsUp();
// code example for Window Binding

// Principle 2
const myObj = {
    greeting: 'Hello',
    whatsUp: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.whatsUp('Zane');
// code example for Implicit Binding

// Principle 3
function NicePerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new NicePerson('Newman');
  const newman = new NicePerson('Jerry');
  
  jerry.speak();
  newman.speak();

// code example for New Binding

// Principle 4
function dude(){
  console.log(this.sup);
}

let donnie = {
  name: 'Donnie',
  sup: "What's a pedarest Walter?"
}

let walter = {
  name: 'Walter',
  sup: 'Shut up Donnie!'
}

dude.call(donnie); //invoking the function here
dude.call(walter);
//code example for explicit