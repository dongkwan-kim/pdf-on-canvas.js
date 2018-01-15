var MOUSEDOWN = false;
document.addEventListener('mousedown', (e) => {
    MOUSEDOWN = true;
});
document.addEventListener('mouseup', (e) => {
    MOUSEDOWN = false;
})

function setupTextAnnotations(page, viewport, canvas, annotationHandler) {
    var annotationLayer = _appendAnnotationLayer(canvas);
    var promise = page.getTextContent().then((annotationsData) => {
        var annotationsTexts = annotationsData.items;
        viewport = viewport.clone({ dontFlip: true });
        for (var i = 0; i < annotationsTexts.length; i++) {
            var annotationText = annotationsTexts[i];
            _appendAnnotationBox(annotationLayer, viewport, annotationText, annotationHandler);
        }
    });
    return promise;
}

function _appendAnnotationLayer(canvas) {
    var annotationLayerID = `${canvas.id}-annotation`;
    var node = document.createElement('DIV');
    node.id = annotationLayerID;
    canvas.parentNode.insertBefore(node, canvas);
    return node;
}

function _appendAnnotationBox(parentNode, viewport, annotationText, annotationHandler) {
    var w = annotationText.width;
    var h = annotationText.height;
    var t = annotationText.transform;
    var boxX = t[4];
    var boxY = viewport.height - t[5] - h;
    var node = document.createElement('DIV');
    node.classList += 'annotation-box';
    node.style.position = 'absolute';
    node.style.width = `${w}px`;
    node.style.height = `${h}px`;
    node.style.transform = `matrix(1, 0, 0, 1, ${boxX}, ${boxY})`;
    node.setAttribute('strVal', annotationText.str);

    node.addEventListener('mouseenter', (e) => {
        if (MOUSEDOWN)
            annotationHandler(e.target);
    });

    node.addEventListener('mousedown', (e) => {
        annotationHandler(e.target);
    })

    parentNode.appendChild(node);
    return node;
}
