# pdf-on-canvas.js
pdf annotation on canvas, as an extension of [pdf.js](https://github.com/mozilla/pdf.js)

![demo](demo/captured.png)

## Usage

You can check the [demo](https://dongkwan-kim.github.io/pdf-on-canvas.js/demo/)

### Load (w/ dependency)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.265/pdf.min.js"></script>
<script src="pdf-on-canvas.js"></script>
```

### Add canvas and pdf-container
```html
<div id="pdf-container" class="pdf-content">
    <canvas id="my-canvas"></canvas>
</div>
```

### Add annotations
```javascript
/* After rendering pdf */
setupTextAnnotations(page, viewport, canvas, (target) => {
    /* Event handler */
});
```

### Get text
```javascript
/* in handler */
target.getAttribute('strVal')
```
