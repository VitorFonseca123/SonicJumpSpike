const sonic = document.querySelector('.sonic');
const spike = document.querySelector('.spike');

function jump() {
    sonic.classList.add('jump');
    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const spikePosition = spike.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    //const sonicAltura = offsetBottom;
    console.log(sonicPosition);
    if (spikePosition <= 80 && sonicPosition < 160 && spikePosition > 0) {
        spike.style.animation = 'none';
        spike.style.left = `${spikePosition}px`;
        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = "./img/sonicDeath.png";

        clearInterval(loop);
    }
}, 10);
document.addEventListener('keydown', jump);