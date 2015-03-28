![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

#FEWD
## JavaScript
###Deeper Down the Rabbit Hole
---

##Agenda

*	Review
*	Variables
*	Conditionals
*	Lab Time
*   Functions

---

![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

#FEWD
## Variables and Conditionals


---


##Review

[JavaScript Syntax](http://piercehanley.github.io/fewd11/week4/slides/javascript/index.html#/14)

---

##Variables

What are variables?

---


##Variables

*	We can tell our program to remember values for us to use later on. 

*	The action of saving a value to memory is called "assignment".

*	The "name" we use to store the value is called a **variable**.

---


##Variables

*	The action of getting the value from a variable is called "accessing" the variable.

*	We will use all the above techniques to store values into variables, and generate new values using existing variables.

---

##Variables Declaration

Declaration:
```javascript
var age;```

Assignment:
```javascript
age = 21;```

Both at the same time:
```javascript
var age = 21;```

---

##Variable Re-Assignment

```javascript
		var name = "Jo";
		console.log(name); // prints "Jo"
		name = "Amir";
		console.log(name); // prints "Amir"```

---

##Variable Conventions

*	Variables start with a lower case letter

*	If they contain multiple words, subsequent words start with an upper case letter ("camelCase"):

		```javascript
		var numberOfStudents = 10;```

---

##Variables & Data Types 

What can you store in a variable?


Note:

##Data Types

The types of different values we support include:
	
*	__String__ text
*	__int__, __float__ numbers
*	__Boolean__ true or false

---

##Strings

*	Stores textual information
*	String literal is surrounded by quotes

```javascript
"How is the weather today?"```

```javascript
'Warm'```

---

##Strings

Double vs single quoted strings:

```javascript
'They "purchased" it'
```

```javascript
"It's a beautiful day"
```
---

##Strings
###"Escaping"
```javascript
"They \"purchased\" it"
```

```javascript
'It\'s a beautiful day'
```

---

##Strings
###Concatenation

Put two strings together with `+`:
```javascript
var firstName = "James";
var lastName = "Bond";
var fullName = firstName + lastName;

console.log(fullName);
// prints "JamesBond"... oops
fullName = firstName + " " + lastName;
console.log(lastName + ", " + firstName + " " + lastName);
// prints "Bond, James Bond"```
---

##Numbers

Represent numerical data

integer:         `42`, `-5`

float:      `3.14159265`, `-0.1`

---


##Arithmetic In JavaScript

![](img/unit_1/arithmetic.jpg)


---


![GeneralAssemb.ly](img/icons/code_along.png)
##Score Keeper
---

##Conversions

--
###String To Number

```javascript
var intString = "4";
var intNumber = parseInt(intString, 10);
// 10 is the base...
// remember hex codes from CSS colors? That would be 16.

var floatString = "3.14159";
var floatNumber = parseFloat(floatString);
```

--
###Number To String

```javascript
var number = 4;
var string = number.toString(); // string "4"
// or this, but less elegant:
var string = number + ""; // also string "4"
```

--
Why would you need to convert datatypes?
--
```javascript
var one = "1";
var onePlusOne = one + one;
var two = "2";
console.log(onePlusOne + " equals " + two);
// prints "11 equals 2"```
**The rules can be unpredictable, so try to convert manually.**

---
##Booleans
`true`

and

`false`
```javascript
console.log(5 < 10); // prints "true" (but not a string)
console.log(10 < 5); // prints "false"```
---

##Conditionals

![](img/unit_1/cfDiagram.png)

---

###if statement

Give it a boolean expression with parentheses around it,
then a block of code to execute if the expression is `true`.

If you are greater than 18 you are an adult:
```javascript
	if (age > 18) {
		console.log("You are an adult");
	}```

---


![GeneralAssemb.ly](img/icons/code_along.png)
##Compare That

---


##Comparisons - Equality

Are two things equal?

```javascript
	10 === 10 // true
	10 === 5 // false
	10 === "hi" // false
	"hi" === "hi" // true
```
--
##Comparisons - Inequality

Are two things different?
```javascript
	10 !== 10 // false
	10 !== 5 // true
	10 !== "hi" // true
	"hi" !== "hi" // false```
--
##Comparisons - Pitfalls
There's a `==` operator too, which will automatically
convert:
```javascript
	10 === "10" // false
	10 == "10" // true!
```
***Use with care!***
---


##Logical Operators

![](img/unit_1/logical_operators.png)


---

##Conditional Syntax
Doing one of two alternatives:
```javascript
	if (currentYear % 4 !== 0) {
		console.log("This is not a leap year.");
	}
	else {
		console.log("This is probably a leap year.");
	}	
```

---

##Conditional Syntax
One of multiple alternatives:
```javascript
	if (currentYear % 4 !== 0) {
		console.log("This is not a leap year.");
	}
	else if (currentYear % 100 === 0) {
		console.log("This is not a leap year.");
	}
	else {
		console.log("This is a leap year.");
	}	
```

---

##Combining Conditions
###"Or"
Use two vertical bars to indicate that **either** of the expressions may be true:
```javascript
	if (day === "Saturday" || day === "Sunday") {
		console.log("It's the weekend!");
	}
	else {
		console.log("It's a weekday, bummer.");
	}	
```
--
##Combining Conditions
###"And"
Use two ampersands to indicate that *both* of the expressions **must** be true:
```javascript
if (name === "GA" && password === "YellowPencil"){
	allowWifiAccess();
}
```

---

##The Truth Table

![](img/unit_1/and_table.png)

---

##The Truth Table

![](img/unit_1/or_table.png)

---

##Pitfalls
`if` statements can accept any data type:
```javascript
if ("banana") {
	console.log("wtf?");
}```
"`==`" comparison behaves differently:
```javascript
if ("0") { console.log('"0" must be true'); }
// prints: "0" must be true
if ("0" == false) { console.log('"0" must be false'); }
// prints: "0" must be false
```

---
![GeneralAssemb.ly](img/icons/exercise_icon_md.png)

##Blackout

---
![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

##Variables and Conditionals
Questions?