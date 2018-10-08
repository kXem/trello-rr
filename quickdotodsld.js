var rrnr = document.querySelector('input#rijksregisterNummerQuickDo.text').value;
var rrnrb64 = btoa(rrnr);
var tab = 'hera' + Math.round(Math.random() * 9999 + 1);
window.open('https://dsld.antwerpen.be/dossiers/external/' + rrnrb64, tab);