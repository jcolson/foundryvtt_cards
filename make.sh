#!/usr/bin/env bash
rm *.zip
cd FoundryVTTCards
zip -r ../FoundryVTTCards.zip .
cd ..
cd Great-Dalmuti
zip -ur ../FoundryVTTCards.zip images
cd ..
cd 54-Playing-Cards
zip -ur ../FoundryVTTCards.zip images
cd ..
cd Three-Dragon-Ante
zip -ur ../FoundryVTTCards.zip images
cd ..
