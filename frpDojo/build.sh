#!/bin/bash

cd elm

elm --only-js --make --output-directory=../js/ GildedRose.elm &>/tmp/compile_error

if [ $? -gt 0 ]; then
    growlnotify -n "Elm" -a "elm" --image "/Users/dzso/Downloads/elm-logo.png" -m "`cat /tmp/compile_error`" -p 10 -t "Compile error"
	rm ../js/GildedRose.js
fi

cd ..