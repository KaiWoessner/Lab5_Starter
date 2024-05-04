// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

var voices = [];
function init() {
  var sel = document.querySelector("select");
  var input = document.getElementById("text-to-speak");
  const speach = new SpeechSynthesisUtterance(input.value);
  var btn = document.querySelector("button");
  btn.addEventListener("click", readText);

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      sel.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function readText() {
    const speach = new SpeechSynthesisUtterance(input.value);
    const selectedOption = sel.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        speach.voice = voices[i];
      }
    }

    var speak_img = document.querySelector("img");
    speach.addEventListener('start', function() {
      speak_img.src = "assets/images/smiling-open.png";
    });
  
    speach.addEventListener('end', function() {
      speak_img.src = "assets/images/smiling.png";
    });

    synth.speak(speach);

    input.blur();
  };
}