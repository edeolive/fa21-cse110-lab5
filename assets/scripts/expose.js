// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelector = document.getElementById('horn-select');
  const hornImg = document.querySelector('main img');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const jsConfetti = new JSConfetti();

  hornSelector.addEventListener('change', (e) => {
    hornImg.src = `assets/images/${e.target.value}.svg`;
    hornImg.alt = `${e.target.value}`;
    audio.src = `assets/audio/${e.target.value}.mp3`;
  });

  volumeSlider.addEventListener('change', (e) => {
    const sliderVol = e.target.value;
    const audioImg = document.querySelector('div img')
    console.log()
    if (sliderVol == 0) {
      audioImg.src = `assets/icons/volume-level-0.svg`;
    } else if (sliderVol < 33) {
      audioImg.src = `assets/icons/volume-level-1.svg`;
    } else if (sliderVol < 67) {
      audioImg.src = `assets/icons/volume-level-2.svg`;
    } else {
      audioImg.src = `assets/icons/volume-level-3.svg`;
    }
    audio.volume = sliderVol / 100;
  });

  playButton.addEventListener('click', (e) => {
    if (hornSelector.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
    audio.play();
  });
}