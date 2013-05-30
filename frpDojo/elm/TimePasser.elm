module TimePasser(stepTime) where

import Dict

type Item = { name:String, expire:Int, quality:Int }
type Inventory = Dict String Item

specialItems = Dict.fromList [
  ("Aged Brie", (0-1, \ _ r q -> q + r)),
  ("Sulfuras", (0, \ _ _ -> id)),
  ("Backstage passes", (0-1, updateQuality)),
  ("Conjured", (0-1, \ _ r q -> q - 2 * r))
  ]

stepTime inventory =
  Dict.map (boundQuality . updateItem) inventory

boundQuality item =
  if | item.quality < 0 -> { item | quality <- 0 }
     | item.quality > 50 -> { item | quality <- 50}
     | otherwise -> item

updateItem item =
  let (deltaExpire, qualityFn) =
        Dict.findWithDefault (0-1, \ _ r q -> q - r) item.name specialItems
      rate = if item.expire > 0 then 1 else 2
  in
     { item | quality <- qualityFn item.expire rate item.quality,
               expire <- item.expire + deltaExpire }

updateQuality expire rate quality =
  if | expire > 10 -> quality + rate
     | expire > 5 -> quality + 2
     | expire > 0 -> quality + 3
     | otherwise -> 0
