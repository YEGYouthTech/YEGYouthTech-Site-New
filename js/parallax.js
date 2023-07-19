// Better hope that the DOM is ready!
const layers = Array.from(document.querySelectorAll("[data-type='parallax']")).map((layer) => [layer, layer.getAttribute('data-depth')]);

window.addEventListener('scroll', function (event) {
    topDistance = this.scrollY;

    // for (i = 0, len = layers.length; i < len; i++) {
    //     layer = layers[i];
    //     depth = layer.getAttribute('data-depth');
    //     movement = -(topDistance * depth);
    //     translate3d = 'translate3d(0, ' + movement + 'px, 0)';
    //     // layer.style['-webkit-transform'] = translate3d;
    //     // layer.style['-moz-transform'] = translate3d;
    //     // layer.style['-ms-transform'] = translate3d;
    //     // layer.style['-o-transform'] = translate3d;
    //     layer.style.transform = translate3d;
    // }

    for (const [layer, depth] of layers) {
        movement = -(topDistance * depth);
        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style.transform = translate3d;
    }
});
