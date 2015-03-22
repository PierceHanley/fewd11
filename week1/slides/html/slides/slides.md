![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

#FEWD
##HTML BASICS 

---


##Agenda

*	HTML Tags & CSS Selectors Review
*	External Style Sheets
*	Lab Time

---


##HTML Basics

---

##HTML HISTORY

![HTML History](img/unit_1/Timeline_of_web_technologies.jpg)

Note:
image retrieved from http://www.onbile.com/info/wp-content/uploads/2013/09/Timeline-of-web-technologies-639x168.jpg on October 1, 2013.

---


##HTML vs HTML5

HTML5 is HTML with a few additions

The Doctype tells you if the page is HTML5 ready.


```html
<!DOCTYPE html>
<html>
	<head>
		...
	</head>
	<body>
		...
	</body>
</html>```


---


##HTML Syntax

![HTML Syntax](img/unit_1/tags.png)

---

##HTML Syntax

![HTML Syntax](img/unit_1/tags_attributes.png)

---

##Content Tags

Heading Elements

```html
<h1>Largest Heading</h1>

<h2>...</h2>

<h3>...</h3>

<h4>...</h4>

<h5>...</h5>

<h6>Smallest Heading</h6>
```
--

##Content Tags

Text Elements

```html
<p>This is a paragraph</p>
```

```
<code>This is some computer code</code>
```

--

##Content Tags

Unordered list

```html
<ul>
	...
</ul>
```

--

##Content Tags

Unordered list items

```html
<ul>
	<li>First item</li>
	<li>Next item</li>
</ul>
```


--

##Content Tags

Links
```html
<a href="http://www.google.com/">Google!</a>
```


--

![GeneralAssemb.ly](img/icons/code_along.png)
##General Assembly Press Release

---


##External Style Sheets

Use a `link` tag inside your header to include styles from a separate CSS file.

```html
<link rel="stylesheet" href="styles/style.css">
``` 

---


![GeneralAssemb.ly](img/icons/exercise_icon_md.png)
##Cookie Recipe
