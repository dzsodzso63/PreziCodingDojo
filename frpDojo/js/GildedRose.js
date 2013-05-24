
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
  var Item_0 = F3(function(name_6, expire_7, quality_8){
    return {
      _:{
      },
      expire:expire_7,
      name:name_6,
      quality:quality_8};});
  var stepTime_2 = function(inventory_17){
    return A2(Dict.map, function(x){
      return boundQuality_3(updateItem_4(x));}, inventory_17);};
  var boundQuality_3 = function(item_18){
    return ((_N.cmp(item_18.quality,0).ctor==='LT') ? _N.replace([['quality',0]], item_18) : ((_N.cmp(item_18.quality,50).ctor==='GT') ? _N.replace([['quality',50]], item_18) : item_18));};
  var updateItem_4 = function(item_19){
    return function(){
      var _32000_20 = A3(Dict.findWithDefault, {ctor:"Tuple2", _0:-1, _1:function(__24){
        return function(r_25){
          return function(q_26){
            return (q_26-r_25);};};}}, item_19.name, specialItems_1);
      var deltaExpire_21 = function(){ 
      switch (_32000_20.ctor) {
        case 'Tuple2':
          return _32000_20._0;
      }_E.Case('Line 32, Column 9') }();
      var qualityFn_22 = function(){ 
      switch (_32000_20.ctor) {
        case 'Tuple2':
          return _32000_20._1;
      }_E.Case('Line 32, Column 9') }();
      var rate_23 = ((_N.cmp(item_19.expire,0).ctor==='GT')?1:2);
      return _N.replace([['quality',A3(qualityFn_22, item_19.expire, rate_23, item_19.quality)],['expire',(item_19.expire+deltaExpire_21)]], item_19);}();};
  var updateQuality_5 = F3(function(expire_31, rate_32, quality_33){
    return ((_N.cmp(expire_31,10).ctor==='GT') ? (quality_33+rate_32) : ((_N.cmp(expire_31,5).ctor==='GT') ? (quality_33+2) : ((_N.cmp(expire_31,0).ctor==='GT') ? (quality_33+3) : 0)));});
  var specialItems_1 = Dict.fromList(_L.Cons({ctor:"Tuple2", _0:_str('Aged Brie'), _1:{ctor:"Tuple2", _0:-1, _1:function(__9){
    return function(r_10){
      return function(q_11){
        return (q_11+r_10);};};}}},_L.Cons({ctor:"Tuple2", _0:_str('Sulfuras'), _1:{ctor:"Tuple2", _0:0, _1:function(__12){
    return function(__13){
      return id;};}}},_L.Cons({ctor:"Tuple2", _0:_str('Backstage passes'), _1:{ctor:"Tuple2", _0:-1, _1:updateQuality_5}},_L.Cons({ctor:"Tuple2", _0:_str('Conjured'), _1:{ctor:"Tuple2", _0:-1, _1:function(__14){
    return function(r_15){
      return function(q_16){
        return (q_16-(2*r_15));};};}}},_L.Nil)))));
  elm.Native = elm.Native||{};
  var _ = elm.Native.TimePasser||{};
  _.$op = {};
  _.stepTime = stepTime_2
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
  var JSE = Elm.JavaScript.Experimental(elm);
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
    }_E.Case('Line 47, Column 5') }();});
  var addItems_11 = F2(function(items_18, inventory_19){
    return function(){
      var insertItem_20 = F2(function(item_21, dict_22){
        return A3(Dict.insert, item_21.name, item_21, dict_22);});
      return A3(foldl, insertItem_20, inventory_19, items_18);}();});
  var deliveries_6 = A2(lift, function(x){
    return A2(map, JSE.toRecord, JS.toList(x));}, jsDeliveries_2);
  var updates_7 = merges(_L.Cons(A2(lift,Delivery_4,deliveries_6),_L.Cons(A2(sampleOn, timePasses_1, constant(TimePasses_5)),_L.Nil)));
  var inventory_8 = A3(foldp, updateInventory_10, Dict.empty, updates_7);
  var jsInventory_9 = A2(sampleOn, inventoryRequests_0, A2(lift, function(x){
    return JS.fromList(A2(map, JSE.fromRecord, Dict.values(x)));}, inventory_8));
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