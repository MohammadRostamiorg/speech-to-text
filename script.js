const transcriptBtn = document.getElementById('transcriptBtn');
const transcriptedText = document.getElementById('transcriptedText')
const rec = new webkitSpeechRecognition();
rec.interimResults = true;
rec.lang = "EN"
transcriptBtn.addEventListener('click', () => {
    rec.start();

    rec.addEventListener('result', e => {

        transcriptedText.innerHTML = e.results[0][0].transcript
    })
})

