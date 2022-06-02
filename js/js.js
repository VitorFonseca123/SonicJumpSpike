const sonic = document.querySelector('.sonic');
const spike = document.querySelector('.spike');
let pontos = document.getElementById('pontos');
var spikePosition = spike.offsetLeft;
var sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
var pont=0;
function jump() {
     
    sonic.classList.add('jump');
    sonic.src = "./img/dash.gif";
    //sonic.style.width="50px";
    setTimeout(() => {
        sonic.classList.remove('jump');
        sonic.src = "./img/sonic.gif";
        //sonic.style.width="50px";
    }, 500);
}

const loop = setInterval(() => {
    
    pontos.innerHTML = pont;
    
    //const sonicAltura = offsetBottom;
     spikePosition = spike.offsetLeft;
     sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    if (spikePosition <= 95 && sonicPosition < 170 && spikePosition > 0) {
        spike.style.animation = 'none';
        spike.style.left = `${spikePosition}px`;
        
        sonic.style.bottom = `${sonicPosition}px`;
        sonic.src = "./img/sonicDeath.png";
        setTimeout(() => {
            sonic.style.animation = 'deathSonic 500ms';
            sonic.style.bottom = '-100px';
        }, 500);
      
       
        
        
        
        clearInterval(loop);
    }else if(spikePosition<=95 && spikePosition<-70){
        pont=pont+100;
        console.log(spikePosition);
    }
}, 10);
document.addEventListener('keydown', jump);
