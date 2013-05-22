module GildedRose where

import JavaScript as JS

foreign import jsevent "input"
  (JS.fromInt 0)
  jsNumbers : Signal JSNumber

numbers = JS.toInt <~ jsNumbers


factorial n = product [1..n]

factorials = factorial <~ numbers



outputs = JS.fromInt <~ factorials
foreign export jsevent "output"
   outputs : Signal JSNumber