![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

##Introduction to Programming

---


##Agenda

* Introduction to Programming
* Introduction to JavaScript and jQuery

---


##Introduction To Programming

Programming is defining _behavior;_ making a computer do what you want it to do.

---


##What is a Program

A __program__ is a set of instructions that you write to tell a computer what to do.

---

##Exercise

Child's play:

--

_Simon says:_ Touch your right pinky.

--

_Simon says:_ Touch the ring finger of your stronger hand.

--

_Simon says:_ Touch your left thumb four times.

---

##Code
Tells a computer what to do.

--

###Actual code:
![GeneralAssemb.ly](img/code.png)

---

##Code is for computers, not humans.

---

##Pseudocode
Simplified code

(with a more complicated name)


---

##Remember our exercises earlier?

--

###What I told you to do was pseudocode.
"Touch the tip of your right pinky."
--

###What your brain sees is code:

![GeneralAssemb.ly](img/wrist.png)


---

###__ALL__ programming languages are pseudocode.
####(some are just pseudoier than others)

--

That said, most people refer to the text of programming languages as "code".

---

##Programming
1. Figure out what you're trying to do.
2. Break it down into smaller steps.

---

##Programming
All programs are just two things: __instructions__ and __decisions__.

--

##Instructions

"Touch your right pinky."
<br/><br/>
###Programming language version:
```
touch_right_pinky();
// underscores_make_things_fancy
// but JavaScript uses CamelCase
```

--

##Decisions
"Touch the ring finger on your strong hand."
<br/><br/>
```
if i_am_left_handed:
    touch_left_ring_finger;
else
    touch_right_ring_finger;
```

--

"Touch your left thumb four times."
```
repeat 4 times:
    touch_left_thumb;
	// Implied decision...
	// "Have I done this four times yet?"

```
---


![GeneralAssemb.ly](img/icons/code_along.png)
##Pseudocodealong:
Write a thermostat program.

--

1. Figure out what we're trying to do.
2. Break it down into smaller steps.

--

###Figure out what we're trying to do.

We want something that lets the user set a temperature, then heats the room until it reaches that temperature.

--

###Break it down into smaller steps.

1. Figure out the user's desired temperature.
2. Figure out the current temperature in the room.
3. Compare the two: if it's too cold, turn on the heat.
4. Keep checking the temperature until it's hot enough, then stop the heater.

--

###Remember:
__Instructions__ and __decisions__.

--

###Break it down into smaller steps.

1. (__instruction__) Figure out the user's desired temperature.
2. (__instruction__) Figure out the current temperature in the room.
3. (__decision__) Compare the two: if it's too cold, turn on the heat.
4. (__instruction__) Keep checking the temperature. (__decision__) If it's hot enough, (__instruction__) then stop the heater.

--

###Pseudocode:
```javascript
desired_temp = read_temperature_control;
current_temp = read_thermometer;
if current_temp < desired_temp
  start_heater;
  while current_temp < desired_temp:
    current_temperature = read_thermometer;
  stop_heater;
```
---

##Summary
* Think about the problem you're trying to solve, and turn it into __instructions__ and __decisions__.
* All programming languages are pseudocode; write programs so that _you_ can read them.
---

##Intro to Programming
####Questions?
---

![GeneralAssemb.ly](img/icons/exercise_icon_md.png)
##Elevator

