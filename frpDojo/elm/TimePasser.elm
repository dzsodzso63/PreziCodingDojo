module TimePasser(stepTime) where

import Dict

-- MODEL the problem
type Item = { name:String, expire:Int, quality:Int }
type Inventory = Dict String Item

-- Passing Time

stepTime : Inventory -> Inventory

stepTime inventory = inventory


