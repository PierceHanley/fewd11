"use strict";
/*
In developing the to-do list application, I had a few goals:

1. Avoid things we haven't talked about in class.
2. Take advantage of HTML/CSS/DOM features that already exist
   whenever possible, instead of recreating their functionality.
3. Make it look and "feel" right.

I've annotated my code below to explain my thought process (for the
things that weren't conscious decisions, I've made guesses about what
I was thinking).

IMPORTANT NOTE: 

I purposefully spent the same time on this that you all did, and
so I had to make some tradeoffs between time spent designing or
improving the code, time spent Googling, and time spent actually
making it work.

As you saw, there were some bugs. More than that, some would disagree
with the design itself. Hell, *I* might disagree with the design if
I gave it more thought.

And that's kinda my point here. Memorization and habits can speed
up the development process, but there's no magic bullet. The best
thing you can do is sit and think about what you're *actually*
trying to do and break it down into pieces until you (1) know how
to implement each piece, or (2) know enough to search/ask for help.
*/

/* prevent the form from submitting */
$("form").on("submit", function(e) {
	// "e" is the "submit" event, its default behavior is to
	// send the form data to the URL specified by its "action"
	// attribute, and take you to the resulting page.
	// we want to prevent that behavior for demonstration purposes.
	e.preventDefault();
	// this is an additional safeguard, not strictly necessary though
	return false;
});

/*
I added this after discovering that hitting "enter" in my text field
wouldn't trigger the "blur" event since the form wasn't submitting.
*/
$("#todo-form").on("submit", function() {
	$("#newTask").blur();
})

/*
this is my main function to add the new task to the list, firing
whenever the input field loses focus (e.g. the user clicked elsewhere
on the page or hit the "tab" key).

I used "$(...).one" instead of "$(...).on", because after adding the
"submit" handler just above I was concerned there would be a bug
in which the "blur" event is triggered twice and the user would get
a duplicate task.

I think I was mistaken about that, and to make matters worse I'd
misread the documentation for "one"... in reality, using it meant
that the "add a new task" feature would only work once; after that,
the "blur" event would no longer execute this handler. Oops!
*/
$("#newTask").one("blur", function() {
	// get the user's description
	var desc = $(this).val();
	console.log("blurred, desc=", desc);
	if (desc !== "") {
		// "makeTaskLi" was my function to create the interface
		// widgets for the new task, see my notes below.
		$("#tasks").append(makeTaskLi(desc));
		// once the task has been added to the list, reset the
		// text field to empty
		$(this).val("");
	}
});

/*
This tells every "delete task" button to delete its parent (the <li>)
when clicked.

This is the source of the bug we witnessed in my demo, in which the
only "delete" buttons that worked were the ones that were already
on the page at the beginning.

What happened was that this code only executed when the page was
first loaded. Therefore, it would only attach the logic to the
<button>s that were already present in the original HTML. New
buttons wouldn't get a "click" handler, even if they had the
"delete-task" class.

I could solve that bug in one of two ways:

1. Manually attach this handler to each <button> when I create it.
2. Configure the event handler to automatically apply to future
   <buttons> created inside the list.

The second option seems more maintainable and efficient to me. I
read through the documentation for the "on" function, and the section
on "delegated" events seems to fit my needs:

  http://api.jquery.com/on/#direct-and-delegated-events

  "Delegated events have the advantage that they can process events
  from descendant elements that are added to the document at a later
  time. By picking an element that is guaranteed to be present at
  the time the delegated event handler is attached, you can use
  delegated events to avoid the need to frequently attach and remove
  event handlers."

Based on that, I think a working version of this function would be:

  $("#tasks").on("click", "button.delete-task", function() {
	$(this).parent().remove();
  });
*/
$("button.delete-task").on("click", function() {
	$(this).parent().remove();
})

/*
Some explanation required here, I've broken it down as best I can.

I was aiming to avoid the ugly-checkbox problem by using CSS to
hide the actual <input type="checkbox">, and display my own
version of it using pure CSS (see my notes in the stylesheet
for more info about that).

So I needed the <label> element that contained a task's
description to toggle that hidden checkbox automatically. I
could easily have done that using a straightforward jQuery
handler, like so:

  // when you click a label, find the checkbox preceding it and
  // pretend to click that
  $("#tasks > label").on("click", function() {
    $(this).prev(":checkbox").click();
  });

However, I wanted to be more clever, and take advantage of the
fact that <label> elements *already* have the ability to toggle a
checkbox when clicked. As I mentioned in class, you do that by
setting the "for" attribute on the <label> tag to be the same as the
ID of the checkbox's <input> tag.

That brought me to a question: what *is* the ID of the checkbox?
Well, since I'm the one creating them, I could set it to whatever
I wanted. The only restriction was that it (like all HTML "id"
attributes) had to be unique within the page.

So then we have another question: how do I come up with a new,
unique ID each time the user creates a task?

I solved it in this case by making a variable containing the number
of tasks that have been created. Whenever I make a new checkbox, I
add 1 to that number and make it part of the new checkbox's ID.
Here's some pseudocode, as an example

  [assume "taskCount" starts at 2, the number of tasks in the HTML]
  
  When the user tries to create a new task:
  1) increment taskCount (value is now 3)
  2) come up with an ID that includes that number (e.g. "task-3")
  3) create an <li> element that will contain our new task
  4a) create an <input type="checkbox">...
  4b) ...and set its "id" attribute to the ID I've generated.
  5a) create a <label> element...
  5b) ...set its "for" attribute to the ID I've generated...
  5c) ...and set its text to the task description provided by the user
  6) put the checkbox and label into the <li>
  7) return the new <li> so it can be added to the task list
*/
var taskCount = $("#tasks > li").length;

function makeTaskLi(description) {
	taskCount++; // 1
	var newTaskId = "task-" + taskCount; // 2

	var li = $("<li class='task'>"); // 3
	var checkbox = $("<input type='checkbox'>") // 4a
		.attr("id", newTaskId) // 4b
		.addClass("task-status");
	// 5a and 5b:
	var label = $("<label>").attr("for", newTaskId).text(description);
	var del = $("<button class='delete-task'>").text("×");
	li.append(checkbox, label, del); // 6
	return li; // 7
}