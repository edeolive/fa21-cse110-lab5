// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynthesis = window.speechSynthesis;
  const voiceSelector = document.getElementById('voice-select');
  const playButton = document.querySelector('button');
  const textToSpeak = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('img');
  let voices;

  /* voice population is done with a timeout because of chrome getVoices() delay */
  setTimeout(() => {
    voices = speechSynthesis.getVoices();
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelector.appendChild(option);
    }
  }, 50);

  playButton.addEventListener('click', (e) => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value)
    utterance.voice = voices.find((voice) => voice.name === voiceSelector.options[voiceSelector.selectedIndex].value);
    speechSynthesis.speak(utterance);
  })

  function moveMouth() {
    if (speechSynthesis.speaking) {
      faceImg.src = `assets/images/smiling-open.png`;
    } else {
      faceImg.src = `assets/images/smiling.png`;
    }
  }

  setInterval(moveMouth, 200);
}