const canvas = document.getElementById('starback-canvas');
// starback
const starback = new Starback(canvas, {
    type: 'dot',
    quantity: 200,
    direction: 0,
    backgroundColor: ['#0e1118', '#232b3e'],
    // starColor: ['#A448EA', '#9CB3F0', '#100F64'],
    starColor: ['#34d399', '#37B9F3', '#0ea5e9'],
    randomOpacity: true,
    speed: [0.4, 1],
});
// width and height
function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    starback.config.width = canvas.width;
    starback.config.height = canvas.height;
    starback.init();
}
// on window size change resize
window.addEventListener('resize', onResize);
// on load resize
window.addEventListener('load', onResize);

// animate with scroll
let lastpos =
    document.documentElement.scrollTop || document.body.scrollTop;
let lastTime = Date.now();
const onScroll = () => {
    const now = Date.now();
    const delta = now - lastTime;
    lastTime = now;
    const pos =
        (document.documentElement.scrollTop || document.body.scrollTop) ?? 0;
    const deltaPos = pos - lastpos;
    const deltaPosAsPercent =
        (deltaPos * 40000) / document.documentElement.scrollHeight ||
        document.body.scrollHeight;
    lastpos = pos;
    // console.log(deltaPosAsPercent);
    starback.setSpeedMultiplier(
        deltaPosAsPercent / delta < 1
            ? deltaPosAsPercent / delta
            : (deltaPosAsPercent * 5) / delta
    );
};
const to = setInterval(() => {
    // console.log(starback.speedMultiplier);
    if (starback.speedMultiplier < -0.2)
        starback.speedMultiplier -= starback.speedMultiplier / 2;
    else if (starback.speedMultiplier > 1)
        starback.speedMultiplier -= starback.speedMultiplier / 2;
    else if (starback.speedMultiplier < 1) starback.speedMultiplier = 1;
}, 100);
window.addEventListener('scroll', onScroll);
