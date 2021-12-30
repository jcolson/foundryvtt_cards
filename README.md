# Three decks of cards for FoundryVTT

- The Great Dalmuti
- 54 Playing Cards (standard 52 card deck + 2 Jokers)
- Three Dragon Ante

## To Install in your Foundry v9 instance

- Go to the **Setup** area of Foundry VTT.
- Click on the **Add-on Modules** tab.
- Click on the **Install Module** button.
- Paste this url `https://github.com/jcolson/foundryvtt_cards/releases/latest/download/module.json` in the **Manifest URL** field.
- Click on the **Install Module** button.

Three new card decks will be available for you to import from a compendium with the name **FoundryVTTCards**.

Happy Gaming!

![Screen Shot](support/screenshot.png)

## Development information

### make the deck(s)

```shell
./make.sh
```

### Re-deploy

```shell
cd ~/foundryvtt_test/Data/modules/FoundryVTTCards && \
sudo rm -Rf * && \
sudo unzip ~/FoundryVTTCards.zip && \
sudo chown -R foundry.foundry ../FoundryVTTCards && \
docker container restart foundryvtt_test
docker logs foundryvtt_test --follow | grep -i card
```
