var rrnr = document.querySelector('div.text.attest').value;
var pagina = document.body.innerHTML;
var result = pagina.match(/\b\d\d\d\d\d\d\d\d\d\d\d\b/g);
var result2 = result.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
});
var rrnrs = '\n\n';
result2.forEach(function(element) {
    rrnrs = rrnrs + element + '\n'    
});
var zeker = confirm('Zoek al deze rrnrs: ' + rrnrs);
if (zeker == true) {

    result2.forEach(function (element) {
        var tab = 'hera' + Math.round(Math.random() * 9999 + 1);
        window.open('https://trello.com/search?q=' + element, tab);
    });
};