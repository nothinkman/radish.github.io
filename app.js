

let audioContext;

function play(frequency, time) {

 const osc = audioContext.createOscillator();
 const volume = audioContext.createGain();

 osc.type = 'square';
 osc.frequency.value = frequency;

 osc.connect(volume);
 volume.connect(audioContext.destination);

 volume.gain.setValueAtTime(0, time);
 volume.gain.linearRampToValueAtTime(1, time + 3);
 volume.gain.linearRampToValueAtTime(0, time + 6);


 osc.start();

}

function sequence () {

 console.log('sequence');

 audioContext = new AudioContext();


 [100,200,80,60,150].forEach((item, index) => {
    play(item, audioContext.currentTime + (index * 2));
 });



}

document.getElementById('buttonSequence').addEventListener("click", sequence);
