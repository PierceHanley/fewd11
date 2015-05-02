![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Forms & Inputs

---

##Forms

How we can get data from users.

![](img/unit_2/forms.png)

---

##Forms

*	Wrapper for a group of data collection elements:

	*	Text fields
	*	Dropdown menus
	*	Radio buttons and checkboxes
	*	etc.
	
---

##Forms

Tell the page: 

*	Where to send the data.
*	How to send it.
*	What is being sent.

---

##`<form>` Tag

Example:

```html
<form action="register.php"
	  method="post"
	  enctype="multipart/form-data">
    ...
</form>
```


---

##`<form>` Tag
### `action` Attribute

* The URL to which the form will send its data.
* By default, this means the browser will leave the current page.

```javascript
$("#myForm").on("submit", function(e) {
	e.preventDefault();
	return false;
});
```

---

##`<form>` Tag
### `method` Attribute

Indicates what type of form is being submitted:

* `"get"`
* `"post"`

--

### `method` Attribute

```html
  <form method="get" ...>
```

* Used for submissions that don't "change" anything, (e.g. searches).
* Data will be in the URL, after a question mark and separated by ampersands:

```http://www.example.com/search?term=obama&startDate=2015-04-01```

--

### `method` Attribute

```html
  <form method="post" ...>
```

* Used for submissions that might "change" something, like entering shipping information on a shopping site.
* The actual data is hidden; not visible in the URL.
* Only way to upload files, by default
 * (needs "`enctype`" attribute too)

--

### `method` Attribute
#### Considerations

* Since `"get"` data is in the URL, it is:
 * Bookmarkable, which can be convenient for users.
 * Visible in people's browser history, so think about privacy.
* The back-end code has to be prepared for that type of `method`.

---

##`<input>` elements

* Place inside ```<form> </form>``` tags
* Represent a piece of data that will be sent with the form.

```html
<input name="user" type="text" />
<input name="pass" type="password" />
```


(way too much functionality crammed into it)


-- 

##`<input>` elements
### `name` attribute

This is the name of that piece of data, as it will be sent to the server.

```html
<form action="/search" method="get">
	<input type="text" name="term" />
</form>
```

Goes to server as:

"`http://example.com/search?term=...`"

---

##`<input>` elements
### `type` attribute

* Controls the way the input is presented to the user.
* Examples:
 * `"text"`: Simple text input
 * `"submit"`: Shows up as a button that will submit the form.
 * `"radio"`: Choices, only one can be selected.
 * etc.

--


##`type="text"`

Use value to set initial text


![](img/unit_2/text.png)

![](img/unit_2/forms.png)

--

###`type="email"`

* Automatically validates email addresses
* Browser may autocomplete differently
* **HTML 5 only**


--

###`type="password"`

* Doesn't display typed characters.
* *Values are still available to JavaScript on the page and will show in the URL.*

![](img/unit_2/password.png)

--

###Button `type`s

`"submit"`, `"file"`, `"button"`

* `value` attribute shows as text.
* `"file"` will pop up an upload dialog when clicked.

---

##Forms
### Non-`<input>` inputs

![](img/unit_2/select.png)

--

###`<select>` and `<option>`

```html
<select name="title">
  <option value="yes">Yeah!</option>
  <option value="no">Nope!</option>
  <option value="maybe">Meh.</option>
</select>
```

---

##`<label>`

Can be connected to a particular input:

```html
<label for="term">Search:</label>
<input name="term" type="text" />
```

* Clicking the label will "focus" the input.
* "`for`" attribute can reference the "`name`" or "`id`" of the input.

---

##Forms
###Styling considerations

Many inputs can't be styled directly, or will ignore your CSS by default.

##**Why?**

--


##Styling
###Workarounds

* Hiding the actual inputs, then being clever with `<label>` elements to mimic it.

--

##Styling

* Some extra CSS rules available:
```css
#agree:checked {
	/* ... */
}
```

---

##Forms
###Gotchas

(there are lots)

--

###Gotchas

Many inputs can't be styled directly, or will ignore your CSS by default.

####**Why?**

--

###Gotchas

"`name`" attribute should be unique within a form, versus "`id`" which is unique within a page.

Which one does the `<label>` refer to?

--

###Gotchas

* Remembering when to use one of the `<input>` types versus other elements (`<button>`, ```<textarea>```, etc).
* Remembering to use "`value`" attribute or content inside the element.

--

###Gotchas

Non-English letters

(more a back-end worry, but "`accept-charset`" attribute helps).

--

###Gotchas

JavaScript interacting with the form has quirks...

* "`keyup`" vs "`change`" events.
* "`password`" input values are accessible, except when they're not.
* etc.


--

###Gotchas

A *lot* of features are HTML5-specific and may not fail gracefully.

* `type="email"` *et al*
* Validation
* Multiple submit targets

--

###Gotchas

Very easy to be too clever.

---

![GeneralAssemb.ly](img/icons/exercise_icon_md.png)
##GA Application Form

