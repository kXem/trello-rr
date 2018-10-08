var rrnr = document.querySelector('input#rijksregisterNummer.text').value;
var rrnr64 = btoa(rrnr);
window.open('https://dsld.antwerpen.be/dossiers/external/' + rrnr64, '_trello');