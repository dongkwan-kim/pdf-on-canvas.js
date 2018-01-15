# pdf-on-canvas.js
pdf annotation on canvas, as an extension of [pdf.js](https://github.com/mozilla/pdf.js)

## Usage

You can check [demo]()

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
/* After render pdf */
setupTextAnnotations(page, viewport, canvas, (target) => {
    /* callback */
});
```

### Get text
```javascript
/* in callback */
target.getAttribute('strVal')
```

