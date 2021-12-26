#!/usr/bin/env bash
rm *.zip
zip -r FoundryVTTCards.zip module.json
cd Great-Dalmuti
zip -ur ../FoundryVTTCards.zip packs/Great-Dalmuti.db images
cd ..
cd 54-Playing-Cards
zip -r ../FoundryVTTCards.zip packs/54-Playing-Cards.db images
cd ..
cd Three-Dragon-Ante
zip -r ../FoundryVTTCards.zip packs/Three-Dragon-Ante.db images
cd ..
