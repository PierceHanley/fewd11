![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

#FEWD
## JavaScript and jQuery

---

###How to write JavaScript
####(or any programming language)
Once you have your problem divided into steps, translate it into words and phrases that the computer understands.

---

###Thermostat Pseudocode:
```javascript
desired_temp = read_temperature_control;
current_temp = read_thermometer;
if (current_temp < desired_temp)
  start_heater;
  while current_temp < desired_temp:
    current_temperature = read_thermometer;
  stop_heater;
```

---

###More like JavaScript:
```
function thermostat() {
  var desired_temp = read_temperature_control();
  var current_temp = read_thermometer();
  if (current_temp < desired_temp) {
    start_heater();
    while (current_temp < desired_temp) {
      current_temp = read_thermometer();
    }
    stop_heater();
  }
}
```


---
![GeneralAssemb.ly](img/icons/code_along.png)
##Color Switcher

---



![GeneralAssemb.ly](img/icons/exercise_icon_md.png)
##JavaScript Traffic Light

---

##Intro To jQuery

---

##What Is jQuery

jQuery __is__ JavaScript

---


##jQuery

jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.

---

##jQuery

*	"Cross browser" - works the same in all* browsers. 

*	Allows:
	*	Document traversal
	*	CSS Manipulation
	*	Event Handling
	*	Animation
	*	and more!

---

##JS/jQuery Basics

---


##Script Tags

---

##jQuery

Adding jQuery to your website

<pre><code>
  &lt;script src="js/jquery-1.8.3.min.js">&lt;/script>

</code></pre>

<pre><code>
&lt;script src="//ajax.googleapis.com/
    ajax/libs/jquery/1.10.2/jquery.min.js">&lt;/script>

</code></pre>

---


##Syntax

__Syntax:__ Spelling and grammar rules of a programming language. 


Note:
Like with any language, there are formal rules around how to write it. This is the syntax.


---

##JavaScript Syntax - Punctuation

* Comments
*	Semicolons
* Parentheses
* Curly Braces
* Braces
*	Quotation Marks

--

###Comments
Don't get executed, for notes to yourself.
```javascript
// Single Line Comments (not in CSS!)
```
```javascript
/* Multi
   line
   comments */
```
--

###Semicolon
Ends a single statement;

```javascript
var x = 5; // this happens;
var y = x + 3; // then this happens;
console.log(y); // then this happens;
```

--
###Parentheses
Wrap them around parts of your statement that need to go together.
```javascript
var x = 2 * 10 + 7;
console.log(x); // 27

var y = 2 * (10 + 7);
console.log(y); // 34
```
--
###Parentheses
When they're right after a name, it means "call" (execute) that function.
```javascript
alert("Oh noes!");
```
--
###Curly braces
Groups together multiple statements as if they were a single combined one.
```javascript
function presentCodealong() {
  // all of the following runs if you call the function
  setupPresentation();

  if (instructor == 'Pierce') {
    makeTypos();
    alert("Sigh...");
  } // ends the "if"

} // ends the function
```
--

###Quotes
Go around "human" text, or around certain "named" things in JavaScript
```javascript
document.getElementById("greeting") // named thing
        .innerText = "Hi there!"; // human text
```

--

###Quotes
You can use single- or double-quotes, but be careful!
```javascript
alert("You're programming JavaScript!"); // works

alert('You're programming JavaScript!'); // broken
```

---

---


##jQuery Syntax

####The Almighty Dollar
```$(...)```

<small>It's magic!</small>

---

##jQuery Syntax - Selectors

Selectors are just like CSS
####jQuery:
```javascript
$("aside.secret").hide(); // element + class

$("#greetButton").click(function() {
  alert("Hello!");
}); // ID
```
####JavaScript:
```javascript
document.getElementById("greetButton")
        .onclick = function() {
          alert("Hello!");
        }
```

---



![GeneralAssemb.ly](img/icons/code_along.png)
##jQuery Traffic Light

---

![GeneralAssemb.ly](img/icons/exercise_icon_md.png)
##Syntax Drill  

--

###What's wrong?
<pre><code>&lt;script href="js/main.js" /></code></pre>

--

###What's wrong?
```javascript
function sayHi() (
  var greetingPhrase = "Heya"
  alert(greetingphrase);
)
```
---

##Why so serious?
Computers are dumb.  When you're telling them what to do, you have to be _very_ specific.

---

## JavaScript and jQuery
###Questions?