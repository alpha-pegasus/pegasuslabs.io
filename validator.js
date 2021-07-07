const terra = new Terra.LCDClient({
    URL: "https://lcd.terra.dev/",
    chainID: "columbus-4"
})

const pegasusAddress = "terravaloper1wdpwudvc639tpy952n2myre6uckuqdu3h9suke"

terra.staking.delegators(pegasusAddress).then(function(delegators) {
    console.log(delegators)
})

