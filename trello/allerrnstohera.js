var pagina = document.querySelector('div.card-detail-window.u-clearfix').innerHTML;
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
        window.open('https://nbttc.antwerpen.be/Hera/rijksregisterConsultatieAction.do?method=consult&vraag=79 ' + element + ' N', tab);
    });
};