# Great Dalmuti (and other examples) deck of cards for Foundry VTT

## make the deck(s)

```shell
./make.sh
```

## redeploy

```shell
cd ~/foundryvtt_test/Data/modules/FoundryVTTCards && \
sudo rm -Rf * && \
sudo unzip ~/FoundryVTTCards.zip && \
sudo chown -R foundry.foundry ../FoundryVTTCards && \
docker container restart foundryvtt_test
docker logs foundryvtt_test --follow | grep -i card
```
