/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var 1stCar = 'Doge'; /* Not valid. Variables should not start with numbers */

var firstCar = 'Doge';

var var = 'variable'; /* Not valid.'var' is a reserved word, can not be used as a name*/

var name = 'variable';

var first name = 'Jerry'; /* Not valid. Variables can not contain white space */
var firstName = 'jerry';

var Sch00lName = 'MEST'; /* Not human readable.We could use camelCase */

var schoolName = 'MEST';

var totalnumber = 100; /* Not human readable.We could use camelCase */

var totalNumber = 100;
/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */

/*All variables are valid independently but not the best practise. Consistency of the quotes. it is wise to choose one, either single or double quotes*/
var greeting  =  "It's nice to me you today!";
var response = 'Ashwin said, "Yes Sir!"';


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here 
 
 We are trying to compare the sum of 0.3 and 0.1 with 0.4.  three equal signs are used for comparison. The result is binary. for this case it is true
 
 
 
 */


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

/*Object literal notation*/
var pizza = {
  type:'Neapolitan;',
  variant:'Marinara',
  size: 'full',
  price: 100',
    };

/*Object constructor function*/

function Pizza(type, variant, size, price) {
	this.type = type; 
	this.variant = variant;
  this.size = size;
  this.price = price;
} 
	var pizza = new Pizza('Neapolitan', 'Marinara', 'full', '100');


/*Object.create*/

var pizza = {
	type:'Neapolitan;',
  variant:'Marinara',
  size: 'full',
  price: 100',
};

var pizzaaa = object.create(pizza); 




/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */



function Animal(kingdom, family) {
	this.kingdom = kingdom; 
	this.family = family;

} 
	var goat = new Animal('animalia', 'bovidae');
  var dog = new Animal('animalia', 'canidae');

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

var option = document.getElementById("myInput").value;
var text;


if (option === 1) {
    text = "Banku selected!";


} else if (option === 4 || letter === 5) {
    text = "It is either kinky or Doknu!";

// If the letter is anything else
} else {
    text = "You selected a western meal";
}




switch (document.getElementById("myInput").value) {
    case 1:
        meal = "Sunday";
        break;
    case 4:
        meal = "Monday";
        break;
    case 5:
        meal = "Saturday";
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];

for (var i=0, len=studentScores.length; i<len; i++) {
    studentScores[i] *= 2; // multiply value times 2
}
console.log(studentScores); 

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */


var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
studentScores.forEach(function(element) {  
  console.log(element);
});
