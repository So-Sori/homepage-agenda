let texts = ["Organize  your time","Prepare your day","And future days"]

let typed = new Typed('.element', {
    strings: ['<b>Organize</b> your time'],
    typeSpeed: 50,
    startDelay: "1000"
});

let typed2 = new Typed('.element2', {
    strings: ['<b>Prepare</b> your day'],
    typeSpeed: 50,
    startDelay: "3000"
});

let typed3 = new Typed('.element3', {
    strings: ['And <b>future </b>days'],
    typeSpeed: 50,
    startDelay: "5000"
});
