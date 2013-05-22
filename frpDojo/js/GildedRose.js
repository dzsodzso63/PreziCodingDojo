
Elm.TimePasser = function(elm){
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
  var _ = Elm.Dict(elm); var Dict = _;
  var Item_0 = F3(function(name_2, expire_3, quality_4){
    return {
      _:{
      },
      expire:expire_3,
      name:name_2,
      quality:quality_4};});
  var stepTime_1 = function(inventory_5){
    return inventory_5;};
  elm.Native = elm.Native||{};
  var _ = elm.Native.TimePasser||{};
  _.$op = {};
  _.stepTime = stepTime_1
  return elm.TimePasser = _;
  };
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
  var _ = Elm.Dict(elm); var Dict = _;
  var JS = Elm.JavaScript(elm);
  var _ = Elm.TimePasser(elm); var TimePasser = _;
  var Delivery_4 = function(a1){
    return {ctor:"Delivery", _0:a1};};
  var TimePasses_5 = {ctor:"TimePasses"};
  var inventoryRequests_0=Elm.Signal(elm).constant(JS.fromBool(true));
  document.addEventListener('requestInventory_' + elm.id, function(e) { elm.notify(inventoryRequests_0.id, e.value); });
  var timePasses_1=Elm.Signal(elm).constant(JS.fromBool(true));
  document.addEventListener('timePasses_' + elm.id, function(e) { elm.notify(timePasses_1.id, e.value); });
  var jsDeliveries_2=Elm.Signal(elm).constant(JS.fromList(_L.Nil));
  document.addEventListener('items_' + elm.id, function(e) { elm.notify(jsDeliveries_2.id, e.value); });
  var Item_3 = F3(function(name_12, expire_13, quality_14){
    return {
      _:{
      },
      expire:expire_13,
      name:name_12,
      quality:quality_14};});
  var updateInventory_10 = F2(function(update_15, inventory_16){
    return function(){ 
    switch (update_15.ctor) {
      case 'Delivery':
        return A2(addItems_11, update_15._0, inventory_16);
      case 'TimePasses':
        return TimePasser.stepTime(inventory_16);
    }_E.Case('Line 46, Column 5') }();});
  var addItems_11 = F2(function(items_18, inventory_19){
    return function(){
      var insertItem_20 = F2(function(item_21, dict_22){
        return A3(Dict.insert, item_21.name, item_21, dict_22);});
      return A3(foldl, insertItem_20, inventory_19, items_18);}();});
  var deliveries_6 = A2(lift, function(x){
    return A2(map, JS.toRecord, JS.toList(x));}, jsDeliveries_2);
  var updates_7 = merges(_L.Cons(A2(lift,Delivery_4,deliveries_6),_L.Cons(A2(sampleOn, timePasses_1, constant(TimePasses_5)),_L.Nil)));
  var inventory_8 = A3(foldp, updateInventory_10, Dict.empty, updates_7);
  var jsInventory_9 = A2(sampleOn, inventoryRequests_0, A2(lift, function(x){
    return JS.fromList(A2(map, JS.fromRecord, Dict.values(x)));}, inventory_8));
  lift(function(v) { var e = document.createEvent('Event');e.initEvent('inventory_' + elm.id, true, true);e.value = v;document.dispatchEvent(e); return v; })(jsInventory_9);
  elm.Native = elm.Native||{};
  var _ = elm.Native.GildedRose||{};
  _.$op = {};
  _.inventoryRequests = inventoryRequests_0;
  _.timePasses = timePasses_1;
  _.jsDeliveries = jsDeliveries_2;
  _.Item = Item_3;
  _.Delivery = Delivery_4;
  _.TimePasses = TimePasses_5;
  _.deliveries = deliveries_6;
  _.updates = updates_7;
  _.inventory = inventory_8;
  _.jsInventory = jsInventory_9;
  _.updateInventory = updateInventory_10;
  _.addItems = addItems_11
  return elm.GildedRose = _;
  };