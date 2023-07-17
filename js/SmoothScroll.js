var smoothscroll = new SmoothScroll({
    // Scrolling Core
    animationTime: 1000, // [ms]
    stepSize: 100, // [px]

    // Acceleration
    accelerationDelta: 20, // 50
    accelerationMax: 2, // 3

    // Keyboard Settings
    keyboardSupport: true, // option
    arrowScroll: 200, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Other
    touchpadSupport: true, // ignore touchpad by default
    fixedBackground: true,
    excluded: '',
});