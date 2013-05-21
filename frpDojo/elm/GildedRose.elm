module GildedRose where

import JavaScript as JS

foreign import jsevent "input"
  (JS.fromInt 0)
  numbers : Signal JSNumber

foreign import jsevent "factorial"
  (JS.fromInt 0)
  numbers : Signal JSNumber

factorial n = product [1..n]

foreign export jsevent "output"
   numbers : Signal JSNumber

main = asText <| factorial 4
