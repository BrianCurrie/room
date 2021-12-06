# Room
This project was to challenge my ability to build an e-commerce homepage as closely to the provided design as possible. 
The design and project requirements were given by [Frontend Mentor](https://www.frontendmentor.io/) and can be read in full [here](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). 

[Live Demo ✔️](https://briancurrie.github.io/room/)

## Overview

### Requirements

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Project Screenshots

![Desktop view](https://i.imgur.com/7VJVzSW.png)

<p align="middle">
  <img src="https://i.imgur.com/Ab5eK9f.png" width="33%" />
  <img src="https://i.imgur.com/lBeL0kC.png" width="33%" /> 
</p>

## What I learned

### Working with CSS Grid

One of the main takeaways from this project was taking a non-trivial desktop design and breaking it down into a CSS Grid pattern.

![Displaying grid](https://i.imgur.com/KmygB49.png)

Then assign content within the defined grid.

![Displaying content in grid](https://i.imgur.com/a9P6yuA.png)

The above layout is made using a full page grid container

```html
<div class="container">
  <!-- Content -->
</div>
```
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 160px 1fr;
  grid-template-rows: 2fr 80px 1.25fr;

  height: 100vh;
}
```
then assigning content based on grid columns and rows
```css
/* Example class taken from project */
.hero {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
}
```

### Useful resources

- [CSS-Tricks guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - A straightforward guide to CSS Grid with a ton of visual examples. Their [guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is also very helpful.
