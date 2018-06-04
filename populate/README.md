# populate

This module is populate data using template and shadow DOM.
No magic, no overhead. This module just do one thing and do it well.

## How to use

1.  Use some code like this in your HTML

```
<template id="singleBook">
<h2 class="demo-card__title mdc-typography--headline6" id="book_title">Our Changing Planet</h2>
<h3 class="demo-card__subtitle mdc-typography--subtitle2">by <span id="book_author"></h3>
<img src="" alt="" class="thumbnail" style="display: none;" id="image">
```

2.  Add this this as dependency one time to your Javascript sources any appropriate way (webpack or direct import )

```
    import 'populate/populate'
```

3.  Fetch the data any appropriate way or describe them statically

```
    var books = [{
        book_title__text: 'Object-Oriented Javascript',
        image__src: 'images/ooj.jpg',
        image__alt: 'got it',
        book_author__text: 'Stoyan Stefanov',
        book_purchase__href: 'http://amzn.to/1sRFbEC'
    }, ...
```

4.  Call the populate method

```
    books.populate(
        document.querySelector("#singleBook").content,
        document.querySelector("#allBooks").createShadowRoot()
    );
```

5.  Be happy :)

## So how it works

The basis is the agreement on names. Let's agree to use keys in our data that are generated using rules.
The main rule is:

```
elemrnt_identifier __ element_attribute.
```

Thats all folks!!!
