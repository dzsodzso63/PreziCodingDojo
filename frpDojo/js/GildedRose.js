
Elm.GildedRose = function(elm){
 var N = Elm.Native, _N = N.Utils(elm), _L = N.List(elm), _E = N.Error(elm), _str = N.JavaScript(elm).toString;
 var $op = {};
 var _ = Elm.Text(elm); var Text = _; var hiding={link:1, color:1, height:1}; for(var k in _){if(k in hiding)continue;eval('var '+k+'=_["'+k+'"]')}
 var _ = Elm.Prelude(elm); var Prelude = _; var hiding={}; for(var k in _){if(k in hiding)continue;eval('var '+k+'=_["'+k+'"]')}
 var _ = Elm.Signal(elm); var Signal = _; var hiding={}; for(var k in _){if(k in hiding)continue;eval('var '+k+'=_["'+k+'"]')}
 var _ = Elm.List(elm); var List = _; var hiding={}; for(var k in _){if(k in hiding)continue;eval('var '+k+'=_["'+k+'"]')}
 var _ = Elm.Maybe(elm); var Maybe = _; var hiding={}; for(var k in _){if(k in hiding)continue;eval('var '+k+'=_["'+k+'"]')}
 var _ = Elm.Time(elm); var Time = _; var hiding={}; for(var k in _){if(k in hiding)continue;eval('var '+k+'=_["'+k+'"]')}
 var _ = Elm.Graphics.Element(elm); var Graphics = Graphics||{};Graphics.Element = _; var hiding={}; for(var k in _){if(k in hiding)continue;eval('var '+k+'=_["'+k+'"]')}
 var _ = Elm.Color(elm); var Color = _; var hiding={}; for(var k in _){if(k in hiding)continue;eval('var '+k+'=_["'+k+'"]')}
 var _ = Elm.Graphics.Collage(elm); var Graphics = Graphics||{};Graphics.Collage = _; var hiding={}; for(var k in _){if(k in hiding)continue;eval('var '+k+'=_["'+k+'"]')}
 var JS = Elm.JavaScript(elm);
 var e, case0, factorial_2, main_3;
 var numbers_1=Elm.Signal.constant(JS.fromInt(0));
 document.addEventListener('input_' + elm.id, function(e) { elm.notify(numbers_1.id, e.value); });
 var numbers_1=Elm.Signal.constant(JS.fromInt(0));
 document.addEventListener('factorial_' + elm.id, function(e) { elm.notify(numbers_1.id, e.value); });
 factorial_2 = function(n_4){
  return product(_L.range(1,n_4));};
 main_3 = asText(factorial_2(4));
 lift(function(v) { var e = document.createEvent('Event');e.initEvent('output_' + elm.id, true, true);e.value = v;document.dispatchEvent(e); return v; })(numbers_1);
 elm.Native = elm.Native||{};
 var _ = elm.Native.GildedRose||{};
 _.$op = {};
 _.numbers = numbers_1;
 _.numbers = numbers_1;
 _.factorial = factorial_2;
 _.main = main_3
 return elm.GildedRose = _;
 };