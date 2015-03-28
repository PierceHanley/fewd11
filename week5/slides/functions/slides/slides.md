![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

#FEWD
##Functions

---


##Agenda

*	Functions
*	Anonymous Functions
*	Temperature Converter!

---

##Functions
###Definition
A block of code that can be called over and over again.
---

##Functions Syntax

```javascript
function greet() {
	alert("Hi!");
}```
* "`function`" is a special JavaScript keyword (like "`var`")
* "`greet`" is your function name
---

##Calling Functions

```javascript
function greet()name) {
	alert("Hi, Chris!");
}```
**Calling** your function:
```javascript
greet(); // shows "Hi, Chris!"```

---

##Function Parameters

```javascript
function greet(name) {
	alert("Hi, " + name + "!");
}```
* "`name`" is a **parameter**\*, a special variable that other people can give your function.
```javascript
greet("Darrius"); // "Hi, Darrius!"
greet("Pierce"); // "Hi, Pierce!"
var input = $("#nameField").val();
greet(input); // "Hi, ____"```
\* (also commonly known as an "argument")

---


##Function Parameters
Multiple parameters:
```javascript
function printMinimum(a, b) {
	if (a < b) {
		console.log(a);
	}
	else {
		console.log(b);
	}
}```


---


##Function Parameters
Modifying parameters:
```javascript
var y = 7;
double(y);
console.log("y is now:", y);

function double(x) {
	console.log("x was:", x)
	x *= 2;
	console.log("2 * x is:", x);
}```

---


##Returning a value
Functions don't always *do* something, sometimes they're just a calculation.  Use `return` to give a value back to the caller.
```javascript
function minimum(a, a) {
	if (a < b) {
		return a;
	}
	else {
		return b;
	}
}

var threeOrFive = minimum(3, 5);
console.log(threeOrFive); // prints "3"```

---

##Organizing Functions

Where do you put functions?

--

You can call functions before they're defined:
```javascript
function sayHi() {
	console.log("Hi!");
}

function chat() {
	sayHi();
	talkAboutWeather(); // see below
}

function talkAboutWeather() {
	console.log("Nice day!");
}```

--

### Try to organize functions "logically"

(super helpful, right?)
--
Helps to imagine yourself trying to find something if you were reading the code for the first time.
---

![GeneralAssemb.ly](img/icons/code_along.png)
##Cash Register

---

##Anonymous Functions
Functions don't need a name:
```javascript
function ouch() {
	alert("Ouch!");
}

$("#eye").click(ouch);```
...is the same as...
```javascript
$("#eye").click(function() {
	alert("Ouch!");
});```

---

![GeneralAssemb.ly](img/icons/code_along.png)
##Anonymous Cash Register

---


![GeneralAssemb.ly](img/icons/exercise_icon_md.png)
## Temperature Converter
(from scratch!)

--

## Temperature Converter
###Requirements:
* Provide two text `<input>` elements:
 * One marked "F" (Fahrenheit)
 * One marked "C" (Celsius)
* Allow the user to enter a number in either input, and update the *other* input with the converted temperature
 (you may use two separate buttons for this)
* Bonus credit for automatically updating as soon as the user changes the value!

