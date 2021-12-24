#!/usr/bin/env bash
rm *.zip
zip -r FoundryVTTCards.zip package.json
cd Great-Dalmuti
zip -ur ../FoundryVTTCards.zip packs/Great-Dalmuti.yaml images
cd ..
cd 54-Playing-Cards
zip -r ../FoundryVTTCards.zip packs/54-Playing-Cards.yaml images
cd ..
cd Three-Dragon-Ante
zip -r ../FoundryVTTCards.zip packs/Three-Dragon-Ante.yaml images
cd ..
