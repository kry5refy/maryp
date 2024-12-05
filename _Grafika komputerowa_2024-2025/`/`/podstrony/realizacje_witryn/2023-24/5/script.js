function narrator() 
{
    var synth = window.speechSynthesis;
    var tekstDoCzytania = document.getElementById('tekst').innerText;
    var utterance = new SpeechSynthesisUtterance(tekstDoCzytania);
    utterance.lang = 'pl-PL';
    synth.speak(utterance);
}