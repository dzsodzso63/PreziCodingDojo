module GildedRose where

import Dict
import JavaScript as JS
import TimePasser

-- Import events from JavaScript
foreign import jsevent "requestInventory" (JS.fromBool True)
  inventoryRequests : Signal JSBool

foreign import jsevent "timePasses" (JS.fromBool True)
  timePasses : Signal JSBool

foreign import jsevent "items" (JS.fromList [])
  jsDeliveries : Signal (JSArray JSObject)

-- MODEL the problem
type Item = { name:String, expire:Int, quality:Int }
type Inventory = Dict String Item

data Update = Delivery [Item] | TimePasses


-- INPUTS to our program

-- Convert the array of objects into a list of records
deliveries : Signal [Item]
deliveries = lift (map JS.toRecord . JS.toList) jsDeliveries

updates = merges [ Delivery <~ deliveries,
                   sampleOn timePasses (constant TimePasses) ]

-- SHOP: putting it all together
inventory : Signal Inventory
inventory = foldp updateInventory Dict.empty updates

-- Export events back to JavaScript
jsInventory = sampleOn inventoryRequests <|
              lift (JS.fromList . map JS.fromRecord . Dict.values) inventory
foreign export jsevent "inventory"
  jsInventory : Signal (JSArray JSObject)


-- UPDATE our model
updateInventory update inventory =
    case update of
      Delivery items -> addItems items inventory
      TimePasses -> TimePasser.stepTime inventory

addItems : [Item] -> Inventory -> Inventory
addItems items inventory =
  let insertItem item dict = Dict.insert item.name item dict
  in  foldl insertItem inventory items








