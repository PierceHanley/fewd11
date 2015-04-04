![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

##FEWD
###Week 6 - Agenda
 * Finish up functions
 * Arrays and Objects
 * `this`

---

##Arrays
Just a numbered list of values, simple as that.

Each value in the list is called an "element".

---
###Creating an array
```javascript
var usFlagColors = ['Red', 'White', 'Blue']
// less common:
var frenchFlagColors = new Array('Red', 'White', 'Blue');
```
--
###Creating an array - pitfall
```javascript
console.log([5]);
// outputs '[5]'

console.log(new Array(5));
// outputs "[]" in Chrome
// Firefox's message is better: "[] (5 empty slots)"
```
---


###Getting array length
```javascript
var beatles = ['Peter', 'John', 'George', 'Ringo'];
console.log(beatles.length); // outputs "4"
```
---

###Getting array items
Use `[]` after your variable name to get an individual value.
<hr>
Numbering starts with zero:
```javascript
var easyAs = ['One', 'Two', 'Three'];
console.log(easyAs[0]); // outputs "One"
console.log(easyAs[1]); // outputs "Two"
console.log(easyAs[2]); // outputs "Three"
```

---
###Setting array items
```javascript
var messages = ['Hello', 'How are ya', 'Goodbye'];
console.log(messages[1]); // Outputs "How are ya"
messages[1] = "What's up?"
console.log(messages[1]); // Outputs "What's up?"
```
---
###Adding to the end
```javascript
var yearsActive = [2011, 2012];
yearsActive.push(2013);
console.log(yearsActive); // Outputs [2011, 2012, 2013]
// can't append each element of another
yearsActive.push([2014, 2015]);
console.log(yearsActive);
// Outputs [2011, 2012, 2013, [2014, 2015]]
```
---
###Doing something with each item
```javascript
['a', 'b', 'c', 'd'].forEach(
  function(curVal, idx) {
	console.log("curVal=", curVal, " idx=", idx);
  });
// outputs:
// "curVal=a idx=0"
// "curVal=b idx=1"
// "curVal=c idx=2"
// "curVal=d idx=3"
```

--
###Transforming each item
```javascript
var positives = [-1, 2, -3, 4].map(Math.abs);
console.log(positives); // Outputs "[1, 2, 3, 4]"
```
--
###Pitfall
Using `map` with exising functions:
```javascript
var oneTwo = ["1", "2"].map(parseInt);
console.log(oneTwo); // Outputs [1, NaN]

// ...equivalent to:
//   [parseInt("1", 0), parseInt("2", 1)]

// Be careful using "map" with a function that takes
// multiple parameters.
```

---
## Objects
Just like an array, only instead of elements being
tracked by number they're tracked by name.
---
### Creating an object
```javascript
var fullName = {
	first: 'Pierce',
	last: 'Hanley'
};
// when they're used as a value, curly braces
// indicate an object rather than a code block
console.log(fullName.first); // Outputs 'Pierce'
console.log(fullName['last']); // Outputs 'Hanley'
```

---
### Object uses
Simple way to pass around structured values:
```javascript
// instead of:
$('p').css('color', 'blue');
$('p').css('background-color', 'white');
$('p').css('font-weight', 'bold');

// ...you can use:
$('p').css({
	color: 'blue',
	'background-color': 'white',
	'font-weight': 'bold'
});
```

---

##Arrays and Objects - Questions?