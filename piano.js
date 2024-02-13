const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['a', 'd', 'g', 'j', 'l']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {

        case "z":
            var crash = new Audio('audio/C.mp3');
            crash.play();
            break;

        case "a":
            var snare = new Audio('audio/Db.mp3');
            snare.play();
            break;

        case "x":
            var kick = new Audio('audio/D.mp3');
            kick.play();
            break;

        case "d":
            var tom1 = new Audio('audio/Eb.mp3');
            tom1.play();
            break;

        case "c":
            var tom2 = new Audio('audio/E.mp3');
            tom2.play();
            break;

        case "v":
            var tom3 = new Audio('audio/F.mp3');
            tom3.play();
            break;

        case "g":
            var tom4 = new Audio('audio/Gb.mp3');
            tom4.play();
            break;

        case "b":
            var tom5 = new Audio('audio/G.mp3');
            tom5.play();
            break;

        case "j":
            var tom6 = new Audio('audio/Ab.mp3');
            tom6.play();
            break;

        case "n":
            var tom7 = new Audio('audio/A.mp3');
            tom7.play();
            break;

        case "l":
            var tom8 = new Audio('audio/Bb.mp3');
            tom8.play();
            break;

        case "m":
            var tom9 = new Audio('audio/B.mp3');
            tom9.play();
            break;

        default: console.log(key);

    }
}

function buttonAnimation(cureentkey) {

    var activeButton = document.querySelector("." + cureentkey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const WHITE_KEYS = e.whiteKeys
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}