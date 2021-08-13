#!/usr/bin/env bash
rm *.zip
cd Great-Dalmuti
zip -r ../Great-Dalmuti deck.yaml images
cd ..
cd 54-Playing-Cards
zip -r ../54-Playing-Cards deck.yaml images
cd ..
